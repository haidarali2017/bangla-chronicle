import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-headline mb-6">
            আমাদের সম্পর্কে
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border mb-8">
              <img
                src="/logo.png"
                alt="Softstation 71"
                className="h-16 mb-6"
              />
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Softstation 71</strong> একটি আধুনিক ও নির্ভরযোগ্য বাংলা অনলাইন সংবাদমাধ্যম। 
                আমরা বাংলাদেশ ও বিশ্বের সর্বশেষ খবর, বিশ্লেষণ এবং মতামত পাঠকদের কাছে পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                আমাদের লক্ষ্য হলো সঠিক, নিরপেক্ষ এবং সময়োপযোগী সংবাদ পরিবেশন করা। 
                আমরা বিশ্বাস করি, একটি সচেতন সমাজ গঠনে সাংবাদিকতার ভূমিকা অপরিসীম।
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <h2 className="text-xl font-bold text-headline mb-4">আমাদের লক্ষ্য</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    সঠিক ও নিরপেক্ষ সংবাদ পরিবেশন
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    পাঠকের কাছে দ্রুত সংবাদ পৌঁছে দেওয়া
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    গণমাধ্যমের স্বাধীনতা রক্ষা করা
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    সামাজিক সচেতনতা বৃদ্ধি করা
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <h2 className="text-xl font-bold text-headline mb-4">আমাদের মূল্যবোধ</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    সততা ও স্বচ্ছতা
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    পেশাদারিত্ব
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    জনস্বার্থ রক্ষা
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    নৈতিকতা ও দায়বদ্ধতা
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border"
            >
              <h2 className="text-xl font-bold text-headline mb-4">আমাদের ইতিহাস</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Softstation 71 প্রতিষ্ঠিত হয়েছে বাংলাদেশের মানুষের কাছে বিশ্বস্ত সংবাদ পৌঁছে দেওয়ার লক্ষ্যে। 
                আমাদের অভিজ্ঞ সাংবাদিক ও সম্পাদকীয় দল প্রতিদিন অক্লান্ত পরিশ্রম করে পাঠকদের জন্য মানসম্মত সংবাদ তৈরি করে।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                আজ আমরা বাংলাদেশের অন্যতম জনপ্রিয় অনলাইন সংবাদমাধ্যম হিসেবে পরিচিত এবং প্রতিদিন লক্ষাধিক পাঠক আমাদের সাথে যুক্ত রয়েছেন।
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default About;
