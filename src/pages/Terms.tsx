import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-headline">শর্তাবলী</h1>
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
            <h2 className="text-xl font-bold text-headline mb-4">১. সেবা শর্তাবলী</h2>
            <p className="text-body-text leading-relaxed">
              প্রতিদিনের সংবাদ ওয়েবসাইট ব্যবহার করে আপনি এই শর্তাবলী মেনে নিচ্ছেন। আমাদের সেবা ব্যবহারের পূর্বে অনুগ্রহ করে এই শর্তাবলী সম্পূর্ণরূপে পড়ুন এবং বুঝুন।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">২. বুদ্ধিবৃত্তিক সম্পদ</h2>
            <p className="text-body-text leading-relaxed">
              এই ওয়েবসাইটে প্রকাশিত সব সংবাদ, ছবি, ভিডিও এবং অন্যান্য বিষয়বস্তুর কপিরাইট প্রতিদিনের সংবাদ এর। অনুমতি ছাড়া এই বিষয়বস্তু পুনঃপ্রকাশ, কপি বা বিতরণ করা নিষিদ্ধ।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৩. ব্যবহারকারীর আচরণ</h2>
            <p className="text-body-text leading-relaxed mb-4">
              আমাদের ওয়েবসাইট ব্যবহারের সময় আপনি নিম্নলিখিত কাজ করবেন না:
            </p>
            <ul className="list-disc list-inside text-body-text space-y-2">
              <li>অপমানজনক, আপত্তিকর বা বেআইনি বিষয়বস্তু পোস্ট করা</li>
              <li>অন্যদের ব্যক্তিগত তথ্য প্রকাশ করা</li>
              <li>স্প্যাম বা বিজ্ঞাপন পোস্ট করা</li>
              <li>হ্যাকিং বা সাইবার আক্রমণের চেষ্টা করা</li>
              <li>ভাইরাস বা ম্যালওয়্যার ছড়ানো</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৪. অ্যাকাউন্ট</h2>
            <p className="text-body-text leading-relaxed">
              আপনার অ্যাকাউন্টের নিরাপত্তা আপনার দায়িত্ব। আপনার অ্যাকাউন্ট ব্যবহার করে করা সব কার্যকলাপের জন্য আপনি দায়ী। অ্যাকাউন্টে কোনো অননুমোদিত প্রবেশ হলে অবিলম্বে আমাদের জানান।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৫. মন্তব্য নীতি</h2>
            <p className="text-body-text leading-relaxed">
              সংবাদে মন্তব্য করার সময় সভ্য ভাষা ব্যবহার করুন। আমরা আপত্তিকর, বিদ্বেষমূলক বা অপ্রাসঙ্গিক মন্তব্য মুছে ফেলার অধিকার রাখি। পুনরাবৃত্তি অপরাধীদের অ্যাকাউন্ট স্থগিত করা হতে পারে।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-headline mb-4">৬. দায়বদ্ধতার সীমাবদ্ধতা</h2>
            <p className="text-body-text leading-relaxed">
              প্রতিদিনের সংবাদ সংবাদের যথার্থতা নিশ্চিত করতে সচেষ্ট, তবে কোনো ত্রুটি বা বিলম্বের জন্য আমরা দায়ী নই। ব্যবহারকারীদের নিজস্ব বিচারবুদ্ধি ব্যবহার করা উচিত।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-headline mb-4">৭. শর্তাবলী পরিবর্তন</h2>
            <p className="text-body-text leading-relaxed">
              আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করতে পারি। গুরুত্বপূর্ণ পরিবর্তন হলে আমরা আপনাকে জানাব। ওয়েবসাইট ব্যবহার চালিয়ে যাওয়ার মানে আপনি নতুন শর্তাবলী মেনে নিচ্ছেন।
            </p>
          </section>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Terms;
