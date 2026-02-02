import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const allLatestNews = [
  {
    id: "1",
    title: "প্রধানমন্ত্রীর জাপান সফর: দ্বিপাক্ষিক সম্পর্ক আরো মজবুত হবে",
    excerpt: "প্রধানমন্ত্রী তিন দিনের রাষ্ট্রীয় সফরে জাপানে গিয়েছেন।",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    category: "আন্তর্জাতিক",
    author: "মোহাম্মদ আলী",
    publishDate: "১ ঘণ্টা আগে",
    slug: "pm-japan-visit",
  },
  {
    id: "2",
    title: "নতুন শিক্ষা কারিকুলাম নিয়ে শিক্ষকদের প্রশিক্ষণ শুরু",
    excerpt: "সারাদেশের শিক্ষকদের জন্য বিশেষ প্রশিক্ষণ কর্মসূচি হাতে নিয়েছে শিক্ষা মন্ত্রণালয়।",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    category: "শিক্ষা",
    author: "ফাতেমা খাতুন",
    publishDate: "২ ঘণ্টা আগে",
    slug: "new-curriculum-training",
  },
  {
    id: "3",
    title: "ঢাকা স্টক এক্সচেঞ্জে রেকর্ড লেনদেন",
    excerpt: "বুধবার ঢাকা স্টক এক্সচেঞ্জে ইতিহাসের সর্বোচ্চ লেনদেন হয়েছে।",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "জাহাঙ্গীর আলম",
    publishDate: "৩ ঘণ্টা আগে",
    slug: "stock-exchange-record",
  },
  {
    id: "4",
    title: "বাংলাদেশ-ভারত সীমান্তে নতুন সড়ক যোগাযোগ",
    excerpt: "দুই দেশের মধ্যে বাণিজ্য সহজতর করতে নতুন সড়ক নির্মাণের কাজ শুরু হয়েছে।",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "রহিম উদ্দিন",
    publishDate: "৪ ঘণ্টা আগে",
    slug: "border-road-connection",
  },
  {
    id: "5",
    title: "বিশ্বকাপ ফুটবল: আর্জেন্টিনা ফাইনালে অগ্রগামী",
    excerpt: "সেমিফাইনালে দুর্দান্ত খেলে ফাইনালে পৌঁছে গেছে আর্জেন্টিনা।",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    category: "খেলা",
    author: "সাদিক হোসেন",
    publishDate: "৫ ঘণ্টা আগে",
    slug: "world-cup-argentina",
  },
  {
    id: "6",
    title: "নতুন আইটি পার্ক স্থাপনের উদ্যোগ নিচ্ছে সরকার",
    excerpt: "প্রযুক্তি খাতে কর্মসংস্থান বাড়াতে সরকার নতুন আইটি পার্ক স্থাপনের পরিকল্পনা নিয়েছে।",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "প্রযুক্তি",
    author: "তানভীর আহমেদ",
    publishDate: "৬ ঘণ্টা আগে",
    slug: "new-it-park",
  },
  {
    id: "7",
    title: "ডেঙ্গু প্রতিরোধে জাতীয় কর্মসূচি ঘোষণা",
    excerpt: "স্বাস্থ্য মন্ত্রণালয় ডেঙ্গু প্রতিরোধে বিশেষ কর্মসূচি হাতে নিয়েছে।",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop",
    category: "স্বাস্থ্য",
    author: "ডা. করিম",
    publishDate: "৭ ঘণ্টা আগে",
    slug: "dengue-prevention",
  },
  {
    id: "8",
    title: "চলচ্চিত্র উৎসবে বাংলাদেশি ছবির জয়জয়কার",
    excerpt: "আন্তর্জাতিক চলচ্চিত্র উৎসবে বাংলাদেশি ছবি পুরস্কার জিতেছে।",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    category: "বিনোদন",
    author: "শাহনাজ বেগম",
    publishDate: "৮ ঘণ্টা আগে",
    slug: "film-festival-win",
  },
  {
    id: "9",
    title: "কৃষিতে ড্রোন প্রযুক্তির ব্যবহার শুরু",
    excerpt: "আধুনিক কৃষির জন্য ড্রোন প্রযুক্তি ব্যবহার শুরু হয়েছে বাংলাদেশে।",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=400&h=300&fit=crop",
    category: "প্রযুক্তি",
    author: "আব্দুল করিম",
    publishDate: "৯ ঘণ্টা আগে",
    slug: "drone-agriculture",
  },
  {
    id: "10",
    title: "নতুন বছরে শিক্ষা প্রতিষ্ঠানে নতুন সূচি",
    excerpt: "নতুন শিক্ষাবর্ষে স্কুল-কলেজে নতুন সময়সূচি কার্যকর হবে।",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    category: "শিক্ষা",
    author: "মাহমুদ হাসান",
    publishDate: "১০ ঘণ্টা আগে",
    slug: "new-school-schedule",
  },
  {
    id: "11",
    title: "রপ্তানি বাণিজ্যে নতুন রেকর্ড",
    excerpt: "গত অর্থবছরে রপ্তানি আয়ে নতুন রেকর্ড সৃষ্টি হয়েছে।",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "সালমা আক্তার",
    publishDate: "১১ ঘণ্টা আগে",
    slug: "export-record",
  },
  {
    id: "12",
    title: "জাতীয় ক্রিকেট দলের নতুন কোচ নিয়োগ",
    excerpt: "বাংলাদেশ ক্রিকেট বোর্ড নতুন হেড কোচ নিয়োগ দিয়েছে।",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
    category: "খেলা",
    author: "রাশেদ খান",
    publishDate: "১২ ঘণ্টা আগে",
    slug: "new-cricket-coach",
  },
];

const ITEMS_PER_PAGE = 6;

const Latest = () => {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, allLatestNews.length));
      setIsLoading(false);
    }, 500);
  };

  const displayedNews = allLatestNews.slice(0, displayCount);
  const hasMore = displayCount < allLatestNews.length;

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-headline mb-6">সর্বশেষ সংবাদ</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * (index % ITEMS_PER_PAGE) }}
            >
              <NewsCard {...news} size="medium" />
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  লোড হচ্ছে...
                </>
              ) : (
                "আরো সংবাদ দেখুন"
              )}
            </Button>
          </div>
        )}

        {!hasMore && (
          <p className="text-center text-muted-foreground mt-8">
            সব সংবাদ দেখানো হয়েছে
          </p>
        )}
      </motion.div>
    </MainLayout>
  );
};

export default Latest;
