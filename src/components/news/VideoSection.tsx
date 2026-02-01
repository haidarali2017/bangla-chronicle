import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const videoNews = [
  {
    id: "v1",
    title: "প্রধানমন্ত্রীর জাপান সফরের বিশেষ প্রতিবেদন",
    thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
    duration: "১২:৪৫",
    slug: "pm-japan-special-report",
  },
  {
    id: "v2",
    title: "বাংলাদেশ ক্রিকেট দলের প্রস্তুতি ম্যাচ",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop",
    duration: "০৮:২০",
    slug: "cricket-practice-match",
  },
  {
    id: "v3",
    title: "ঢাকার যানজট সমস্যা ও সমাধান",
    thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop",
    duration: "১৫:৩০",
    slug: "dhaka-traffic-solution",
  },
  {
    id: "v4",
    title: "আন্তর্জাতিক বাণিজ্য মেলার বিশেষ আয়োজন",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    duration: "১০:১৫",
    slug: "trade-fair-special",
  },
];

const VideoSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Play className="text-primary" size={24} fill="currentColor" />
          <h2 className="section-title">ভিডিও সংবাদ</h2>
        </div>
        <Link
          to="/videos"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          সব দেখুন
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videoNews.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <VideoCard {...video} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
