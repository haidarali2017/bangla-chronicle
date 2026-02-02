import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const openPositions = [
  {
    id: "1",
    title: "সিনিয়র রিপোর্টার",
    department: "সম্পাদকীয়",
    location: "ঢাকা",
    type: "ফুলটাইম",
    deadline: "১৫ ফেব্রুয়ারি, ২০২৬",
  },
  {
    id: "2",
    title: "ভিডিও এডিটর",
    department: "মাল্টিমিডিয়া",
    location: "ঢাকা",
    type: "ফুলটাইম",
    deadline: "২০ ফেব্রুয়ারি, ২০২৬",
  },
  {
    id: "3",
    title: "ওয়েব ডেভেলপার",
    department: "তথ্যপ্রযুক্তি",
    location: "ঢাকা (রিমোট সম্ভব)",
    type: "ফুলটাইম",
    deadline: "২৮ ফেব্রুয়ারি, ২০২৬",
  },
  {
    id: "4",
    title: "সোশ্যাল মিডিয়া ম্যানেজার",
    department: "মার্কেটিং",
    location: "ঢাকা",
    type: "ফুলটাইম",
    deadline: "১০ মার্চ, ২০২৬",
  },
  {
    id: "5",
    title: "ফটোজার্নালিস্ট",
    department: "সম্পাদকীয়",
    location: "চট্টগ্রাম",
    type: "ফুলটাইম",
    deadline: "১৫ মার্চ, ২০২৬",
  },
];

const benefits = [
  "প্রতিযোগিতামূলক বেতন ও বোনাস",
  "স্বাস্থ্য বীমা সুবিধা",
  "বার্ষিক ছুটি ও উৎসব ছুটি",
  "পেশাদার প্রশিক্ষণ",
  "ক্যারিয়ার উন্নয়নের সুযোগ",
  "বন্ধুত্বপূর্ণ কর্মপরিবেশ",
];

const Career = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-headline mb-4">
              ক্যারিয়ার
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Softstation 71-এ যোগ দিন এবং বাংলাদেশের অন্যতম সেরা সংবাদমাধ্যমের অংশ হোন।
              আমরা প্রতিভাবান ও উদ্যমী মানুষদের খুঁজছি।
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border mb-8">
            <h2 className="text-2xl font-bold text-headline mb-6 text-center">
              কেন আমাদের সাথে কাজ করবেন?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                >
                  <span className="text-primary">✓</span>
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <h2 className="text-2xl font-bold text-headline mb-6">চলমান পদসমূহ</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-headline mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-sm text-primary mt-2">
                      আবেদনের শেষ তারিখ: {position.deadline}
                    </p>
                  </div>
                  <Button className="flex-shrink-0">
                    আবেদন করুন
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-primary/5 rounded-lg p-6 md:p-8 mt-8 text-center"
          >
            <h3 className="text-xl font-bold text-headline mb-3">
              আপনার পছন্দের পদ খুঁজে পাননি?
            </h3>
            <p className="text-muted-foreground mb-4">
              আপনার সিভি পাঠান, আমরা উপযুক্ত সুযোগ এলে আপনার সাথে যোগাযোগ করব।
            </p>
            <Link to="/contact">
              <Button variant="outline">
                সাধারণ আবেদন জমা দিন
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Career;
