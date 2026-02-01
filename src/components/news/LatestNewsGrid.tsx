import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const latestNews = [
  {
    id: "4",
    title: "প্রধানমন্ত্রীর জাপান সফর: দ্বিপাক্ষিক সম্পর্ক আরো মজবুত হবে",
    excerpt: "প্রধানমন্ত্রী তিন দিনের রাষ্ট্রীয় সফরে জাপানে গিয়েছেন। এই সফরে বিভিন্ন গুরুত্বপূর্ণ চুক্তি স্বাক্ষরিত হবে বলে আশা করা হচ্ছে।",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    category: "আন্তর্জাতিক",
    author: "মোহাম্মদ আলী",
    publishDate: "১ ঘণ্টা আগে",
    slug: "pm-japan-visit",
  },
  {
    id: "5",
    title: "নতুন শিক্ষা কারিকুলাম নিয়ে শিক্ষকদের প্রশিক্ষণ শুরু",
    excerpt: "সারাদেশের শিক্ষকদের জন্য বিশেষ প্রশিক্ষণ কর্মসূচি হাতে নিয়েছে শিক্ষা মন্ত্রণালয়।",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    category: "শিক্ষা",
    author: "ফাতেমা খাতুন",
    publishDate: "২ ঘণ্টা আগে",
    slug: "new-curriculum-training",
  },
  {
    id: "6",
    title: "ঢাকা স্টক এক্সচেঞ্জে রেকর্ড লেনদেন",
    excerpt: "বুধবার ঢাকা স্টক এক্সচেঞ্জে ইতিহাসের সর্বোচ্চ লেনদেন হয়েছে। বিনিয়োগকারীদের মধ্যে উৎসাহ দেখা যাচ্ছে।",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "জাহাঙ্গীর আলম",
    publishDate: "৩ ঘণ্টা আগে",
    slug: "stock-exchange-record",
  },
  {
    id: "7",
    title: "বাংলাদেশ-ভারত সীমান্তে নতুন সড়ক যোগাযোগ",
    excerpt: "দুই দেশের মধ্যে বাণিজ্য সহজতর করতে নতুন সড়ক নির্মাণের কাজ শুরু হয়েছে।",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "রহিম উদ্দিন",
    publishDate: "৪ ঘণ্টা আগে",
    slug: "border-road-connection",
  },
  {
    id: "8",
    title: "বিশ্বকাপ ফুটবল: আর্জেন্টিনা ফাইনালে অগ্রগামী",
    excerpt: "সেমিফাইনালে দুর্দান্ত খেলে ফাইনালে পৌঁছে গেছে আর্জেন্টিনা।",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    category: "খেলা",
    author: "সাদিক হোসেন",
    publishDate: "৫ ঘণ্টা আগে",
    slug: "world-cup-argentina",
  },
  {
    id: "9",
    title: "নতুন আইটি পার্ক স্থাপনের উদ্যোগ নিচ্ছে সরকার",
    excerpt: "প্রযুক্তি খাতে কর্মসংস্থান বাড়াতে সরকার নতুন আইটি পার্ক স্থাপনের পরিকল্পনা নিয়েছে।",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "প্রযুক্তি",
    author: "তানভীর আহমেদ",
    publishDate: "৬ ঘণ্টা আগে",
    slug: "new-it-park",
  },
];

const LatestNewsGrid = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">দৈনিক সংবাদ</h2>
        <Link
          to="/latest"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          সব দেখুন
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Ad Placeholder */}
      <div className="ad-placeholder h-[90px] mb-6">
        <div className="text-center">
          <p className="text-sm">বিজ্ঞাপন - ৭২৮x৯০</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestNews.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
          >
            <NewsCard {...news} size="medium" />
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-outline"
        >
          আরো সংবাদ দেখুন
        </motion.button>
      </div>
    </section>
  );
};

export default LatestNewsGrid;
