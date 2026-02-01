import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

const featuredNews = {
  id: "1",
  title: "বাংলাদেশের অর্থনীতিতে ঐতিহাসিক মাইলফলক: জিডিপি প্রবৃদ্ধি রেকর্ড ছাড়িয়ে গেছে",
  excerpt: "বিশ্বব্যাংকের সর্বশেষ প্রতিবেদন অনুযায়ী, বাংলাদেশের অর্থনীতি গত বছরের তুলনায় উল্লেখযোগ্য প্রবৃদ্ধি অর্জন করেছে। বিশেষজ্ঞরা মনে করছেন এই ধারা অব্যাহত থাকলে আগামী দশকে দেশটি মধ্যম আয়ের দেশে পরিণত হবে।",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
  category: "অর্থনীতি",
  author: "রফিকুল ইসলাম",
  publishDate: "৫ ঘণ্টা আগে",
  slug: "bangladesh-economy-milestone",
};

const subFeaturedNews = [
  {
    id: "2",
    title: "জাতীয় ক্রিকেট দলের নতুন অধিনায়ক ঘোষণা",
    excerpt: "বিসিবি নতুন অধিনায়ক হিসেবে ঘোষণা দিয়েছে...",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
    category: "খেলা",
    author: "সাইফুল আলম",
    publishDate: "২ ঘণ্টা আগে",
    slug: "cricket-new-captain",
  },
  {
    id: "3",
    title: "ঢাকা-চট্টগ্রাম এক্সপ্রেসওয়ে উদ্বোধন আগামী মাসে",
    excerpt: "দীর্ঘ প্রতীক্ষার পর অবশেষে এক্সপ্রেসওয়ে...",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
    category: "বাংলাদেশ",
    author: "নাজমুল হক",
    publishDate: "৩ ঘণ্টা আগে",
    slug: "dhaka-chittagong-expressway",
  },
];

const FeaturedSection = () => {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 news-card group"
        >
          <Link to={`/news/${featuredNews.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-t-lg">
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded mb-3">
                {featuredNews.category}
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-relaxed line-clamp-3">
                {featuredNews.title}
              </h2>
            </div>
          </Link>
          
          <div className="p-5">
            <p className="news-excerpt line-clamp-2">{featuredNews.excerpt}</p>
            <div className="flex items-center gap-4 mt-3 text-caption">
              <span className="text-sm">{featuredNews.author}</span>
              <span className="flex items-center gap-1 text-sm">
                <Clock size={14} />
                {featuredNews.publishDate}
              </span>
            </div>
          </div>
        </motion.article>

        {/* Sub Featured */}
        <div className="space-y-6">
          {subFeaturedNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <NewsCard {...news} size="medium" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
