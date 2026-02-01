import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import NewsCard from "@/components/news/NewsCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categoryNames: { [key: string]: string } = {
  bangladesh: "বাংলাদেশ",
  international: "আন্তর্জাতিক",
  sports: "খেলা",
  economy: "অর্থনীতি",
  opinion: "মতামত",
  entertainment: "বিনোদন",
  lifestyle: "জীবনযাপন",
  technology: "প্রযুক্তি",
  education: "শিক্ষা",
  health: "স্বাস্থ্য",
};

const mockCategoryNews = [
  {
    id: "c1",
    title: "জাতীয় সংসদে নতুন আইন পাস, জনগণের জন্য সুবিধা বাড়বে",
    excerpt: "সংসদে আজ একটি গুরুত্বপূর্ণ আইন পাস হয়েছে যা সাধারণ জনগণের জীবনমানে প্রভাব ফেলবে।",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "নাজমুল হক",
    publishDate: "১ ঘণ্টা আগে",
    slug: "parliament-new-law",
  },
  {
    id: "c2",
    title: "প্রধানমন্ত্রীর সফর: জাপানের সাথে দ্বিপাক্ষিক সম্পর্ক জোরদার",
    excerpt: "প্রধানমন্ত্রী তিন দিনের রাষ্ট্রীয় সফরে জাপানে গিয়েছেন।",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "মোহাম্মদ আলী",
    publishDate: "২ ঘণ্টা আগে",
    slug: "pm-japan-visit",
  },
  {
    id: "c3",
    title: "ঢাকায় নতুন মেট্রোরেল লাইন উদ্বোধন আগামী মাসে",
    excerpt: "দীর্ঘ প্রতীক্ষার পর অবশেষে নতুন মেট্রোরেল লাইন চালু হতে যাচ্ছে।",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "রহিম উদ্দিন",
    publishDate: "৩ ঘণ্টা আগে",
    slug: "dhaka-metro-rail",
  },
  {
    id: "c4",
    title: "রাজধানীতে ভারী বৃষ্টিপাতের সতর্কতা জারি",
    excerpt: "আবহাওয়া অধিদপ্তর আগামী দুই দিনে ভারী বৃষ্টিপাতের সতর্কতা জারি করেছে।",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "সুমন আহমেদ",
    publishDate: "৪ ঘণ্টা আগে",
    slug: "rain-warning",
  },
];

const CategoryPage = () => {
  const { category } = useParams();
  const categoryName = categoryNames[category || ""] || "সংবাদ";

  return (
    <MainLayout>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-caption mb-6">
        <Link to="/" className="hover:text-primary">হোম</Link>
        <ChevronRight size={14} />
        <span className="text-foreground">{categoryName}</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-headline border-b-4 border-primary pb-2 inline-block">
          {categoryName}
        </h1>
        <p className="text-caption mt-2">{categoryName} সম্পর্কিত সর্বশেষ সংবাদ</p>
      </motion.div>

      {/* Ad Placeholder */}
      <div className="ad-placeholder h-[90px] mb-6">
        <p className="text-sm">বিজ্ঞাপন - ৭২৮x৯০</p>
      </div>

      {/* News Grid */}
      <div className="space-y-6">
        {mockCategoryNews.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <NewsCard {...news} size="large" />
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
    </MainLayout>
  );
};

export default CategoryPage;
