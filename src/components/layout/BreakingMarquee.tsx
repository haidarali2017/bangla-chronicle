import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const breakingNews = [
  { id: 1, title: "জাতীয় সংসদে নতুন আইন পাস, জনগণের জন্য সুবিধা বাড়বে", slug: "parliament-new-law" },
  { id: 2, title: "বাংলাদেশ ক্রিকেট দল ঐতিহাসিক জয় অর্জন করলো", slug: "bangladesh-cricket-win" },
  { id: 3, title: "ঢাকায় নতুন মেট্রোরেল লাইন উদ্বোধন আগামী মাসে", slug: "dhaka-metro-rail" },
  { id: 4, title: "আন্তর্জাতিক বাণিজ্য মেলায় রেকর্ড সংখ্যক দর্শক", slug: "trade-fair-visitors" },
  { id: 5, title: "দেশের অর্থনীতিতে ইতিবাচক প্রবৃদ্ধি, বিশ্বব্যাংকের প্রতিবেদন", slug: "economy-growth" },
];

const BreakingMarquee = () => {
  return (
    <div className="breaking-marquee">
      <div className="container mx-auto px-4 flex items-center gap-4">
        {/* Breaking Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded font-bold text-sm whitespace-nowrap"
        >
          <Zap size={16} className="animate-pulse" />
          সর্বশেষ
        </motion.div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate content for seamless loop */}
            {[...breakingNews, ...breakingNews].map((news, index) => (
              <Link
                key={`${news.id}-${index}`}
                to={`/news/${news.slug}`}
                className="inline-flex items-center mx-8 hover:underline transition-all"
              >
                <span className="w-2 h-2 bg-primary-foreground rounded-full mr-3 flex-shrink-0" />
                <span className="text-sm">{news.title}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BreakingMarquee;
