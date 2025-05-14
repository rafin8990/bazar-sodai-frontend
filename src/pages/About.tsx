import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 sm:py-32">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg"
      alt="আধুনিক অভ্যন্তরীণ ডিজাইন"
      className="w-full h-full object-cover object-center opacity-30"
    />
  </div>
  <div className="container-custom relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">আমাদের সম্পর্কে</h1>
      <p className="text-lg sm:text-xl text-gray-200">
        জীবনের প্রতি ভালোবাসা থেকেই আমাদের যাত্রা শুরু।
        “বাজার সদাই” আপনাদের জন্য এনেছে আধুনিক জীবনের উপযোগী নিত্য প্রয়োজনীয় জিনিস।
      </p>
    </div>
  </div>
</section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">আমাদের লক্ষ্য</h2>
              <p className="text-gray-600 mb-8">
                আমরা প্রতিনিয়ত আপনার জীবনের প্রয়োজনীয়তা ও সুবিধার কথা মাথায়
                রেখে কাজ করছি। আমাদের লক্ষ্য হলো নিত্যপ্রয়োজনীয় সব জিনিসপত্র
                আপনার দোরগোড়ায় পৌঁছে দেওয়া — প্রতারণামুক্ত, নির্ভেজাল এবং
                বাজারদরের সঙ্গে সামঞ্জস্য রেখে সর্বোচ্চ মানসম্পন্ন পণ্যের
                নিশ্চয়তা দিয়ে।
              </p>
              <p className="text-gray-600">
                চাল, ডাল, তেল, মসলা, মাছ-মাংস থেকে শুরু করে দৈনন্দিন ব্যবহারের
                নানা ধরনের সামগ্রী — সবকিছুই আমরা সংগ্রহ করি যাচাই-বাছাই করে,
                যাতে আপনি পান নিরাপদ ও স্বাস্থ্যসম্মত খাদ্যপণ্য। আমাদের প্রতিটি
                পণ্যে গুণগত মান বজায় রাখা ও গ্রাহকের সন্তুষ্টি অর্জনই আমাদের
                মূল অঙ্গীকার।
              </p>
              <p className="text-gray-600">
                আমরা বিশ্বাস করি, আপনি যেখানেই থাকুন না কেন, সঠিক পণ্যটি পাওয়া
                এবং সেটি ঘরে বসেই গ্রহণ করা এখন আর বিলাসিতা নয় — বরং আপনার
                প্রাপ্য অধিকার। আর তাই, আপনার যেকোনো দৈনন্দিন প্রয়োজনে “বাজার
                সদাই” থাকবে আপনার পাশে — বিশ্বস্ত বন্ধু হয়ে, সবসময় ইনশাআল্লাহ।
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">আমাদের মূল মূল্যবোধ</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">গুণগত কারুশিল্প</h4>
                    <p className="text-gray-600">
                      আমরা অভিজ্ঞ ও দক্ষ কারিগরদের সঙ্গে কাজ করি যারা তাদের কাজে
                      গর্ববোধ করেন।
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">টেকসই উপকরণ</h4>
                    <p className="text-gray-600">
                      আমরা পরিবেশবান্ধব ও দায়িত্বশীলভাবে সংগৃহীত উপকরণের
                      অগ্রাধিকার দিই।
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">চিন্তাশীল নকশা</h4>
                    <p className="text-gray-600">
                      আমরা বিশ্বাস করি অর্থবহ ও উদ্দেশ্যপূর্ণ ডিজাইনের শক্তিতে।
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">অসাধারণ সেবা</h4>
                    <p className="text-gray-600">
                      আমরা চেষ্টা করি যেন আপনার কেনাকাটা হয় আনন্দদায়ক ও
                      স্মরণীয়।
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Owner</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bazar Sodai who curate and
              deliver exceptional home goods
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
          {/*   <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-primary-600 mb-3">
                Founder & Creative Director
              </p>
              <p className="text-gray-600">
                With a background in interior design, Sarah founded Luxe Haven
                to make thoughtful design accessible to everyone.
              </p>
            </div> */}

            {/* Team Member 2 */}
          {/*   <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="David Chen"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-primary-600 mb-3">
                Head of Product Development
              </p>
              <p className="text-gray-600">
                David brings ten years of experience in product design and
                sustainable material sourcing to our team.
              </p>
            </div> */}

            {/* Team Member 3 */}
            {/* <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Maya Patel"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold">Maya Patel</h3>
              <p className="text-primary-600 mb-3">
                Customer Experience Manager
              </p>
              <p className="text-gray-600">
                Maya ensures every customer interaction is exceptional, from
                browsing to delivery and beyond.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
