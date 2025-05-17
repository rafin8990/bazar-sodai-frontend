import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import toast from 'react-hot-toast';
import type { CustomOrder } from '../types/types';

interface CustomOrderContextType {
  orders: CustomOrder[];
  addOrder: (order: CustomOrder) => void;
  getOrders: () => CustomOrder[];
}

const CustomOrderContext = createContext<CustomOrderContextType | undefined>(undefined);

export const useCustomOrder = (): CustomOrderContextType => {
  const context = useContext(CustomOrderContext);
  if (!context) {
    throw new Error('useCustomOrder must be used within a CustomOrderProvider');
  }
  return context;
};

interface CustomOrderProviderProps {
  children: ReactNode;
}

export const CustomOrderProvider: React.FC<CustomOrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<CustomOrder[]>(() => {
    // Load orders from localStorage on initial render
    const savedOrders = localStorage.getItem('customOrders');
    if (savedOrders) {
      try {
        return JSON.parse(savedOrders);
      } catch (error) {
        console.error('Failed to parse custom orders from localStorage:', error);
        return [];
      }
    }
    return [];
  });

  const addOrder = (order: CustomOrder) => {
    setOrders(prevOrders => {
      const newOrders = [...prevOrders, order];
      // Save to localStorage
      localStorage.setItem('customOrders', JSON.stringify(newOrders));
      toast.success('Custom order submitted successfully!');
      return newOrders;
    });
  };

  const getOrders = () => orders;

  return (
    <CustomOrderContext.Provider value={{ orders, addOrder, getOrders }}>
      {children}
    </CustomOrderContext.Provider>
  );
};