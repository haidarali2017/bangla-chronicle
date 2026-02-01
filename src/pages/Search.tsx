import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search as SearchIcon, Calendar, Filter, X } from "lucide-react";
import NewsCard from "@/components/news/NewsCard";

const searchResults = [
  {
    id: "s1",
    title: "বাংলাদেশের অর্থনীতিতে ঐতিহাসিক মাইলফলক",
    excerpt: "বিশ্বব্যাংকের প্রতিবেদনে বাংলাদেশের অর্থনৈতিক প্রবৃদ্ধি নিয়ে ইতিবাচক মন্তব্য।",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "রফিকুল ইসলাম",
    publishDate: "১ ফেব্রুয়ারি, ২০২৬",
    slug: "economy-milestone",
  },
  {
    id: "s2",
    title: "ঢাকা স্টক এক্সচেঞ্জে রেকর্ড লেনদেন",
    excerpt: "বুধবার ঢাকা স্টক এক্সচেঞ্জে ইতিহাসের সর্বোচ্চ লেনদেন।",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "জাহাঙ্গীর আলম",
    publishDate: "৩১ জানুয়ারি, ২০২৬",
    slug: "stock-exchange-record",
  },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const clearFilters = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-headline mb-2">সংবাদ অনুসন্ধান</h1>
          <p className="text-caption">আপনার পছন্দের সংবাদ খুঁজুন</p>
        </motion.div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-caption" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="সংবাদ, বিষয়, বা কীওয়ার্ড লিখুন..."
                className="input-field pl-12 text-lg"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary px-8"
            >
              অনুসন্ধান
            </motion.button>
          </div>

          {/* Filter Toggle */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
          >
            <Filter size={16} />
            {showFilters ? "ফিল্টার বন্ধ করুন" : "তারিখ অনুযায়ী ফিল্টার করুন"}
          </button>

          {/* Date Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-muted/30 rounded-lg"
            >
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <label className="form-label flex items-center gap-2">
                    <Calendar size={14} />
                    শুরুর তারিখ
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="form-label flex items-center gap-2">
                    <Calendar size={14} />
                    শেষ তারিখ
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input-field"
                  />
                </div>
                {(startDate || endDate) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-destructive hover:underline"
                  >
                    <X size={14} />
                    মুছুন
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </form>

        {/* Search Results */}
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-divider">
              <h2 className="text-lg font-bold text-headline">
                "{query}" এর জন্য {searchResults.length} টি ফলাফল পাওয়া গেছে
              </h2>
            </div>

            <div className="space-y-6">
              {searchResults.map((news, index) => (
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

            {searchResults.length === 0 && (
              <div className="text-center py-12">
                <SearchIcon className="mx-auto text-muted-foreground mb-4" size={48} />
                <h3 className="text-xl font-bold text-headline mb-2">কোনো ফলাফল পাওয়া যায়নি</h3>
                <p className="text-caption">অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Initial State */}
        {!hasSearched && (
          <div className="text-center py-12">
            <SearchIcon className="mx-auto text-muted-foreground mb-4" size={48} />
            <h3 className="text-xl font-bold text-headline mb-2">সংবাদ অনুসন্ধান করুন</h3>
            <p className="text-caption">উপরের সার্চ বক্সে আপনার কীওয়ার্ড লিখুন</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
