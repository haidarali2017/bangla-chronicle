import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { Lock } from "lucide-react";

const SecurityPolicy = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-headline">নিরাপত্তা নীতি</h1>
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
            <h2 className="text-xl font-bold text-headline mb-4">১. আমাদের নিরাপত্তা প্রতিশ্রুতি</h2>
            <p className="text-body-text leading-relaxed">
              প্রতিদিনের সংবাদ আপনার তথ্য এবং অনলাইন অভিজ্ঞতার নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেয়। আমরা আধুনিক নিরাপত্তা প্রযুক্তি এবং সর্বোত্তম অনুশীলন অনুসরণ করে আপনার ডেটা সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">২. ডেটা এনক্রিপশন</h2>
            <p className="text-body-text leading-relaxed mb-4">
              আমরা নিম্নলিখিত এনক্রিপশন প্রযুক্তি ব্যবহার করি:
            </p>
            <ul className="list-disc list-inside text-body-text space-y-2">
              <li>SSL/TLS এনক্রিপশন সব ডেটা ট্রান্সমিশনে</li>
              <li>সংবেদনশীল তথ্যের জন্য AES-256 এনক্রিপশন</li>
              <li>পাসওয়ার্ড হ্যাশিং এর জন্য bcrypt অ্যালগরিদম</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৩. অ্যাক্সেস নিয়ন্ত্রণ</h2>
            <p className="text-body-text leading-relaxed">
              শুধুমাত্র অনুমোদিত কর্মীরা আপনার ব্যক্তিগত তথ্যে প্রবেশ করতে পারে। আমরা কঠোর অ্যাক্সেস নিয়ন্ত্রণ নীতি অনুসরণ করি এবং সব অ্যাক্সেস লগ করে রাখি।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৪. নিরাপত্তা মনিটরিং</h2>
            <p className="text-body-text leading-relaxed">
              আমাদের সিস্টেম ২৪/৭ মনিটরিং করা হয়। যেকোনো সন্দেহজনক কার্যকলাপ সনাক্ত হলে আমরা তাৎক্ষণিক পদক্ষেপ নিই।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৫. ব্যবহারকারীর দায়িত্ব</h2>
            <p className="text-body-text leading-relaxed mb-4">
              আপনার অ্যাকাউন্ট নিরাপদ রাখতে আমরা আপনাকে উৎসাহিত করি:
            </p>
            <ul className="list-disc list-inside text-body-text space-y-2">
              <li>শক্তিশালী ও অনন্য পাসওয়ার্ড ব্যবহার করুন</li>
              <li>পাসওয়ার্ড কারো সাথে শেয়ার করবেন না</li>
              <li>পাবলিক কম্পিউটার থেকে লগআউট করুন</li>
              <li>সন্দেহজনক ইমেইল বা লিংক এড়িয়ে চলুন</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-headline mb-4">৬. নিরাপত্তা ইস্যু রিপোর্ট</h2>
            <p className="text-body-text leading-relaxed">
              কোনো নিরাপত্তা সমস্যা বা সন্দেহজনক কার্যকলাপ লক্ষ্য করলে অনুগ্রহ করে আমাদের জানান:
              <br />
              ইমেইল: security@protidiner-sangbad.com
              <br />
              আমরা সব রিপোর্ট গোপনীয়তার সাথে পর্যালোচনা করি।
            </p>
          </section>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default SecurityPolicy;
