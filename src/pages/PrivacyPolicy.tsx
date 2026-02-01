import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-headline">গোপনীয়তা নীতি</h1>
          </div>
          <p className="text-caption">সর্বশেষ আপডেট: ১ ফেব্রুয়ারি, ২০২৬</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-8 prose prose-lg max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">১. তথ্য সংগ্রহ</h2>
            <p className="text-body-text leading-relaxed mb-4">
              প্রতিদিনের সংবাদ আপনার কাছ থেকে বিভিন্ন ধরনের তথ্য সংগ্রহ করতে পারে। এর মধ্যে রয়েছে:
            </p>
            <ul className="list-disc list-inside text-body-text space-y-2">
              <li>নিবন্ধনের সময় প্রদত্ত ব্যক্তিগত তথ্য (নাম, ইমেইল, মোবাইল নম্বর)</li>
              <li>ওয়েবসাইট ব্যবহারের সময় স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য (আইপি অ্যাড্রেস, ব্রাউজার তথ্য)</li>
              <li>কুকিজ এবং অন্যান্য ট্র্যাকিং প্রযুক্তির মাধ্যমে প্রাপ্ত তথ্য</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">২. তথ্যের ব্যবহার</h2>
            <p className="text-body-text leading-relaxed mb-4">
              আমরা সংগৃহীত তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:
            </p>
            <ul className="list-disc list-inside text-body-text space-y-2">
              <li>আপনাকে সংবাদ ও সেবা প্রদান করতে</li>
              <li>আপনার অভিজ্ঞতা উন্নত করতে</li>
              <li>নিউজলেটার ও প্রচারণামূলক বার্তা পাঠাতে</li>
              <li>ওয়েবসাইটের পারফরম্যান্স বিশ্লেষণ করতে</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৩. তথ্য শেয়ারিং</h2>
            <p className="text-body-text leading-relaxed">
              আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি করি না। তবে, কিছু ক্ষেত্রে আমরা নির্ভরযোগ্য পার্টনারদের সাথে তথ্য শেয়ার করতে পারি, যেমন বিজ্ঞাপন প্রদানকারী এবং বিশ্লেষণ সেবা প্রদানকারী। এই সব ক্ষেত্রে আমরা আপনার গোপনীয়তা সুরক্ষিত রাখার জন্য যথাযথ ব্যবস্থা গ্রহণ করি।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৪. কুকিজ</h2>
            <p className="text-body-text leading-relaxed">
              আমাদের ওয়েবসাইট কুকিজ ব্যবহার করে। কুকিজ হলো ছোট টেক্সট ফাইল যা আপনার ডিভাইসে সংরক্ষিত হয়। এগুলো আমাদের আপনার পছন্দ মনে রাখতে এবং ওয়েবসাইটের কার্যকারিতা উন্নত করতে সাহায্য করে। আপনি চাইলে আপনার ব্রাউজার সেটিংস থেকে কুকিজ অক্ষম করতে পারেন।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৫. তথ্য নিরাপত্তা</h2>
            <p className="text-body-text leading-relaxed">
              আমরা আপনার তথ্যের নিরাপত্তা নিশ্চিত করতে উন্নত প্রযুক্তি ও পদ্ধতি ব্যবহার করি। তবে, ইন্টারনেটে সম্পূর্ণ নিরাপত্তা নিশ্চিত করা সম্ভব নয়, তাই আমরা শতভাগ নিরাপত্তার গ্যারান্টি দিতে পারি না।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-headline mb-4">৬. যোগাযোগ</h2>
            <p className="text-body-text leading-relaxed">
              এই গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:
              <br />
              ইমেইল: privacy@protidiner-sangbad.com
              <br />
              ফোন: +৮৮০ ২-৯৫৫০০০০
            </p>
          </section>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
