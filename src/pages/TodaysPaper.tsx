import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Calendar, Download, Printer, Share2, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const todaysSections = [
  {
    name: "প্রথম পাতা",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
    articles: 12,
  },
  {
    name: "বাংলাদেশ",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=300&fit=crop",
    articles: 8,
  },
  {
    name: "আন্তর্জাতিক",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    articles: 6,
  },
  {
    name: "খেলা",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    articles: 10,
  },
  {
    name: "অর্থনীতি",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    articles: 5,
  },
  {
    name: "বিনোদন",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
    articles: 7,
  },
];

const TodaysPaper = () => {
  const [isViewingEpaper, setIsViewingEpaper] = useState(false);
  
  const today = new Date();
  const banglaDate = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a simple PDF-like download simulation
    toast.success("ই-পেপার ডাউনলোড শুরু হয়েছে...");
    // In real app, this would trigger actual PDF download
    setTimeout(() => {
      toast.success("ডাউনলোড সম্পন্ন হয়েছে!");
    }, 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: "আজকের পত্রিকা - Softstation 71",
      text: `${banglaDate} - আজকের সকল সংবাদ পড়ুন`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled
      }
    } else {
      // Fallback: copy link
      await navigator.clipboard.writeText(window.location.href);
      toast.success("লিংক কপি করা হয়েছে!");
    }
  };

  const handleViewEpaper = () => {
    setIsViewingEpaper(true);
    toast.info("ই-পেপার লোড হচ্ছে...");
  };

  return (
    <MainLayout showSidebar={false}>
      <div className="max-w-6xl mx-auto print:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 print:hidden">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-headline mb-2">
                আজকের পত্রিকা
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={18} />
                <span>{banglaDate}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2" onClick={handlePrint}>
                <Printer size={16} />
                প্রিন্ট
              </Button>
              <Button variant="outline" size="sm" className="gap-2" onClick={handleDownload}>
                <Download size={16} />
                ডাউনলোড
              </Button>
              <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                <Share2 size={16} />
                শেয়ার
              </Button>
            </div>
          </div>

          {/* Print Header - Only visible when printing */}
          <div className="hidden print:block mb-6">
            <h1 className="text-2xl font-bold text-center mb-2">Softstation 71</h1>
            <p className="text-center text-sm">{banglaDate}</p>
          </div>

          {/* E-Paper Preview */}
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border mb-8 print:hidden">
            {!isViewingEpaper ? (
              <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <FileText size={48} className="mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground mb-2">ই-পেপার প্রিভিউ</p>
                  <p className="text-sm text-muted-foreground mb-4">{banglaDate}</p>
                  <Button onClick={handleViewEpaper} className="gap-2">
                    <Eye size={16} />
                    সম্পূর্ণ ই-পেপার দেখুন
                  </Button>
                </div>
              </div>
            ) : (
              <div className="aspect-[16/10] bg-background rounded-lg border border-border overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* E-Paper Header */}
                  <div className="bg-primary text-primary-foreground p-4 text-center">
                    <h2 className="text-xl font-bold">Softstation 71</h2>
                    <p className="text-sm opacity-90">{banglaDate}</p>
                  </div>
                  
                  {/* E-Paper Content Grid */}
                  <div className="flex-1 p-4 grid grid-cols-3 gap-4 overflow-auto">
                    {todaysSections.map((section, idx) => (
                      <Link
                        key={section.name}
                        to={`/category/${section.name.toLowerCase()}`}
                        className="bg-muted rounded p-3 hover:bg-muted/80 transition-colors"
                      >
                        <img
                          src={section.image}
                          alt={section.name}
                          className="w-full aspect-video object-cover rounded mb-2"
                        />
                        <h4 className="font-medium text-sm">{section.name}</h4>
                        <p className="text-xs text-muted-foreground">{section.articles}টি সংবাদ</p>
                      </Link>
                    ))}
                  </div>

                  {/* E-Paper Actions */}
                  <div className="p-4 border-t border-border flex justify-center gap-3">
                    <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
                      <Printer size={14} />
                      প্রিন্ট
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2">
                      <Download size={14} />
                      ডাউনলোড
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                      <Share2 size={14} />
                      শেয়ার
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sections */}
          <h2 className="text-2xl font-bold text-headline mb-6">আজকের বিভাগসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {todaysSections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Link
                  to={`/category/${section.name.toLowerCase()}`}
                  className="block bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-headline group-hover:text-primary transition-colors">
                      {section.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {section.articles}টি সংবাদ
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Archive Link */}
          <div className="text-center mt-8">
            <Link to="/search">
              <Button variant="outline" size="lg">
                <Calendar size={18} className="mr-2" />
                আর্কাইভ দেখুন
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default TodaysPaper;
