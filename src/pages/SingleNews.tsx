import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Clock, User, Share2, Facebook, Twitter, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
import NewsCard from "@/components/news/NewsCard";

// Mock data for a single news
const mockNewsData = {
  id: "1",
  title: "বাংলাদেশের অর্থনীতিতে ঐতিহাসিক মাইলফলক: জিডিপি প্রবৃদ্ধি রেকর্ড ছাড়িয়ে গেছে",
  excerpt: "বিশ্বব্যাংকের সর্বশেষ প্রতিবেদন অনুযায়ী, বাংলাদেশের অর্থনীতি গত বছরের তুলনায় উল্লেখযোগ্য প্রবৃদ্ধি অর্জন করেছে।",
  content: `
    <p>বাংলাদেশের অর্থনীতি এক নতুন মাইলফলকে পৌঁছেছে। বিশ্বব্যাংকের সর্বশেষ প্রতিবেদন অনুযায়ী, চলতি অর্থবছরে দেশের জিডিপি প্রবৃদ্ধি ৭.৫ শতাংশ ছাড়িয়ে গেছে, যা গত এক দশকে সর্বোচ্চ।</p>
    
    <p>বিশেষজ্ঞরা মনে করছেন, এই অসাধারণ অর্থনৈতিক প্রবৃদ্ধির পেছনে রয়েছে সরকারের দূরদর্শী অর্থনৈতিক নীতি, রপ্তানি আয় বৃদ্ধি এবং বিদেশ থেকে প্রবাসী আয়ের স্থিতিশীল প্রবাহ।</p>
    
    <h3>প্রধান কারণসমূহ</h3>
    
    <p>অর্থনীতিবিদ ড. আবুল হাসান জানান, "তৈরি পোশাক শিল্প, কৃষি উৎপাদন এবং আইটি সেক্টরের অভূতপূর্ব বিকাশ এই প্রবৃদ্ধির মূল চালিকা শক্তি। বিশেষ করে ডিজিটাল অর্থনীতিতে বাংলাদেশ উল্লেখযোগ্য অগ্রগতি করেছে।"</p>
    
    <p>সরকারের মেগা প্রকল্পগুলো যেমন পদ্মা সেতু, মেট্রোরেল, কর্ণফুলী টানেল ইত্যাদি অর্থনীতিতে নতুন গতি সঞ্চার করেছে। এই অবকাঠামো উন্নয়ন বাণিজ্য ও যোগাযোগ সহজতর করে অর্থনৈতিক কার্যক্রম বাড়িয়েছে।</p>
    
    <h3>ভবিষ্যৎ সম্ভাবনা</h3>
    
    <p>বিশ্বব্যাংকের প্রতিবেদনে বলা হয়েছে, এই ধারা অব্যাহত থাকলে আগামী ২০৩০ সালের মধ্যে বাংলাদেশ মধ্যম আয়ের দেশে পরিণত হবে। প্রতিবেদনে আরও উল্লেখ করা হয়েছে যে, দক্ষ মানবসম্পদ তৈরি, প্রযুক্তি খাতে বিনিয়োগ এবং টেকসই উন্নয়ন নিশ্চিত করা গেলে এই প্রবৃদ্ধি দীর্ঘমেয়াদী হবে।</p>
    
    <p>তবে বিশেষজ্ঞরা সতর্ক করে বলছেন, মূল্যস্ফীতি নিয়ন্ত্রণ, বৈষম্য হ্রাস এবং পরিবেশ সুরক্ষায় মনোযোগ দিতে হবে। অর্থনৈতিক প্রবৃদ্ধি টেকসই করতে সুশাসন এবং দুর্নীতি দমনও জরুরি।</p>
  `,
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  ],
  category: "অর্থনীতি",
  author: "রফিকুল ইসলাম",
  publishDate: "১ ফেব্রুয়ারি, ২০২৬",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

const relatedNews = [
  {
    id: "r1",
    title: "ঢাকা স্টক এক্সচেঞ্জে রেকর্ড লেনদেন",
    excerpt: "বুধবার ঢাকা স্টক এক্সচেঞ্জে ইতিহাসের সর্বোচ্চ লেনদেন হয়েছে।",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "অর্থনীতি",
    author: "জাহাঙ্গীর আলম",
    publishDate: "৩ ঘণ্টা আগে",
    slug: "stock-exchange-record",
  },
  {
    id: "r2",
    title: "নতুন আইটি পার্ক স্থাপনের উদ্যোগ নিচ্ছে সরকার",
    excerpt: "প্রযুক্তি খাতে কর্মসংস্থান বাড়াতে সরকার নতুন আইটি পার্ক স্থাপনের পরিকল্পনা নিয়েছে।",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    category: "প্রযুক্তি",
    author: "তানভীর আহমেদ",
    publishDate: "৬ ঘণ্টা আগে",
    slug: "new-it-park",
  },
];

const mockComments = [
  { id: 1, author: "আহমেদ হোসেন", content: "চমৎকার প্রতিবেদন! বাংলাদেশের অর্থনীতি সত্যিই এগিয়ে যাচ্ছে।", time: "২ ঘণ্টা আগে" },
  { id: 2, author: "রাজিয়া সুলতানা", content: "এই ধরনের ইতিবাচক খবর আমাদের অনুপ্রেরণা জোগায়।", time: "৪ ঘণ্টা আগে" },
  { id: 3, author: "মাহমুদ রহমান", content: "আশা করি সামনে আরো ভালো খবর পাবো।", time: "৫ ঘণ্টা আগে" },
];

const SingleNews = () => {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [comment, setComment] = useState("");
  
  // In real app, fetch news by slug
  const news = mockNewsData;

  return (
    <MainLayout>
      <article className="max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-caption mb-4">
          <Link to="/" className="hover:text-primary">হোম</Link>
          <ChevronRight size={14} />
          <Link to={`/category/${news.category.toLowerCase()}`} className="hover:text-primary">
            {news.category}
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground line-clamp-1">{news.title.substring(0, 30)}...</span>
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-headline leading-relaxed mb-4"
        >
          {news.title}
        </motion.h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-divider">
          <span className="flex items-center gap-1 text-sm text-caption">
            <User size={14} />
            {news.author}
          </span>
          <span className="flex items-center gap-1 text-sm text-caption">
            <Clock size={14} />
            {news.publishDate}
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
            {news.category}
          </span>
          
          {/* Share Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-caption hidden sm:inline">শেয়ার করুন:</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white"
            >
              <Facebook size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white"
            >
              <Twitter size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
            >
              <Share2 size={16} />
            </motion.button>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden mb-6"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full aspect-video object-cover"
          />
        </motion.div>

        {/* Ad Placeholder */}
        <div className="ad-placeholder h-[90px] mb-6">
          <p className="text-sm">বিজ্ঞাপন - ৭২৮x৯০</p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: news.content }}
          style={{
            lineHeight: "2",
            fontSize: "1.1rem",
          }}
        />

        {/* Image Gallery */}
        {news.gallery.length > 0 && (
          <section className="mb-8">
            <h3 className="section-title mb-4">ছবি গ্যালারি</h3>
            <div className="relative">
              <img
                src={news.gallery[activeImage]}
                alt={`Gallery ${activeImage + 1}`}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="flex justify-center gap-2 mt-4">
                {news.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                      activeImage === idx ? "border-primary" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Embed */}
        {news.videoUrl && (
          <section className="mb-8">
            <h3 className="section-title mb-4">ভিডিও</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={news.videoUrl}
                title="Video"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Ad Placeholder */}
        <div className="ad-placeholder h-[250px] mb-8">
          <p className="text-sm">বিজ্ঞাপন - ৩০০x২৫০</p>
        </div>

        {/* Comments Section */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="text-primary" size={20} />
            <h3 className="section-title mb-0 pb-0 border-b-0">মন্তব্য ({mockComments.length})</h3>
          </div>

          {/* Comment Form */}
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-caption mb-3">মন্তব্য করতে লগইন করুন</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="আপনার মন্তব্য লিখুন..."
              className="input-field resize-none h-24 mb-3"
            />
            <div className="flex items-center gap-3">
              <Link to="/login" className="btn-primary text-sm">
                লগইন করুন
              </Link>
              <button className="btn-secondary text-sm" disabled>
                মন্তব্য করুন
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {mockComments.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-headline">{c.author}</h4>
                    <p className="text-xs text-caption">{c.time}</p>
                  </div>
                </div>
                <p className="text-body-text leading-relaxed">{c.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related News */}
        <section>
          <h3 className="section-title mb-4">সম্পর্কিত সংবাদ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} {...news} size="medium" />
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  );
};

export default SingleNews;
