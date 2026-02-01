import { motion } from "framer-motion";
import { TrendingUp, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const mostReadNews = [
  { id: 1, title: "বাংলাদেশ ক্রিকেট দল ঐতিহাসিক জয় অর্জন করলো সিরিজে", slug: "cricket-win", views: "২৫,০০০" },
  { id: 2, title: "ঢাকায় নতুন মেট্রোরেল লাইন উদ্বোধন আগামী মাসে", slug: "metro-rail", views: "১৮,৫০০" },
  { id: 3, title: "দেশের অর্থনীতিতে ইতিবাচক প্রবৃদ্ধির ধারা অব্যাহত", slug: "economy-growth", views: "১৫,২০০" },
  { id: 4, title: "শিক্ষা খাতে নতুন বাজেট বরাদ্দ ঘোষণা করা হলো", slug: "education-budget", views: "১২,৮০০" },
  { id: 5, title: "আন্তর্জাতিক বাণিজ্য মেলায় রেকর্ড সংখ্যক দর্শক", slug: "trade-fair", views: "১০,৪০০" },
];

const latestNews = [
  { id: 1, title: "প্রধানমন্ত্রীর সফর: জাপানের সাথে দ্বিপাক্ষিক সম্পর্ক জোরদার", slug: "pm-japan", time: "৫ মিনিট আগে" },
  { id: 2, title: "রাজধানীতে ভারী বৃষ্টিপাতের সতর্কতা জারি করা হয়েছে", slug: "rain-warning", time: "১৫ মিনিট আগে" },
  { id: 3, title: "জাতীয় পুরস্কার বিতরণ অনুষ্ঠান আজ সন্ধ্যায় অনুষ্ঠিত", slug: "national-award", time: "২৫ মিনিট আগে" },
  { id: 4, title: "বঙ্গবন্ধু স্টেডিয়ামে আন্তর্জাতিক ক্রিকেট ম্যাচ শুরু", slug: "stadium-match", time: "৪০ মিনিট আগে" },
  { id: 5, title: "নতুন শিক্ষানীতি নিয়ে জাতীয় সেমিনার অনুষ্ঠিত হবে", slug: "education-seminar", time: "১ ঘণ্টা আগে" },
];

const Sidebar = () => {
  return (
    <aside className="space-y-6 sticky top-16">
      {/* Ad Placeholder */}
      <div className="ad-placeholder h-[250px]">
        <div className="text-center">
          <p className="text-sm">বিজ্ঞাপন</p>
          <p className="text-xs mt-1">৩০০x২৫০</p>
        </div>
      </div>

      {/* Most Read */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="sidebar-section"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
          <TrendingUp className="text-primary" size={20} />
          <h3 className="font-bold text-lg text-headline">সর্বাধিক পঠিত</h3>
        </div>
        <ul className="space-y-0">
          {mostReadNews.map((news, index) => (
            <motion.li
              key={news.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="sidebar-item group"
            >
              <Link to={`/news/${news.slug}`} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {["১", "২", "৩", "৪", "৫"][index]}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-headline leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-xs text-caption mt-1">{news.views} পাঠক</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Latest News */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="sidebar-section"
      >
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-divider">
          <Clock className="text-primary" size={20} />
          <h3 className="font-bold text-lg text-headline">সর্বশেষ খবর</h3>
        </div>
        <ul className="space-y-0">
          {latestNews.map((news, index) => (
            <motion.li
              key={news.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="sidebar-item group"
            >
              <Link to={`/news/${news.slug}`} className="block">
                <h4 className="text-sm font-medium text-headline leading-relaxed line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>
                <p className="text-xs text-caption mt-1 flex items-center gap-1">
                  <Clock size={12} />
                  {news.time}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
        <Link
          to="/latest"
          className="flex items-center justify-center gap-1 mt-4 py-2 text-sm font-medium text-primary hover:underline"
        >
          সব খবর দেখুন
          <ChevronRight size={16} />
        </Link>
      </motion.div>

      {/* Ad Placeholder */}
      <div className="ad-placeholder h-[600px]">
        <div className="text-center">
          <p className="text-sm">বিজ্ঞাপন</p>
          <p className="text-xs mt-1">৩০০x৬০০</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
