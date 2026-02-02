import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { BarChart3, Users, Eye, TrendingUp, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const adFormats = [
  {
    name: "ব্যানার বিজ্ঞাপন",
    sizes: ["৩০০x২৫০", "৭২৮x৯০", "১৬০x৬০০"],
    description: "ওয়েবসাইটের বিভিন্ন স্থানে প্রদর্শিত হয়",
    price: "৫,০০০ - ২৫,০০০ টাকা/মাস",
  },
  {
    name: "স্পনসর্ড কন্টেন্ট",
    sizes: ["কাস্টম"],
    description: "আপনার ব্র্যান্ডের জন্য বিশেষ সংবাদ/নিবন্ধ",
    price: "১৫,০০০ - ৫০,০০০ টাকা/প্রতি",
  },
  {
    name: "ভিডিও বিজ্ঞাপন",
    sizes: ["প্রি-রোল", "মিড-রোল"],
    description: "ভিডিও কন্টেন্টের সাথে প্রদর্শিত",
    price: "১০,০০০ - ৩০,০০০ টাকা/মাস",
  },
  {
    name: "পপ-আপ বিজ্ঞাপন",
    sizes: ["ফুলস্ক্রিন", "মডাল"],
    description: "উচ্চ দৃশ্যমানতা সম্পন্ন বিজ্ঞাপন",
    price: "২০,০০০ - ৪০,০০০ টাকা/মাস",
  },
];

const stats = [
  { icon: Users, value: "৫০ লক্ষ+", label: "মাসিক পাঠক" },
  { icon: Eye, value: "২ কোটি+", label: "মাসিক পেজ ভিউ" },
  { icon: TrendingUp, value: "৪৫%", label: "বার্ষিক প্রবৃদ্ধি" },
  { icon: BarChart3, value: "৮০%", label: "বাংলাদেশি দর্শক" },
];

const Advertising = () => {
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
              বিজ্ঞাপন
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Softstation 71-এ বিজ্ঞাপন দিয়ে আপনার ব্র্যান্ডকে লক্ষ লক্ষ পাঠকের কাছে পৌঁছে দিন।
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-headline">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Ad Formats */}
          <h2 className="text-2xl font-bold text-headline mb-6">বিজ্ঞাপনের ধরন</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {adFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-card rounded-lg p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-bold text-headline mb-2">{format.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{format.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {format.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <p className="text-primary font-medium">{format.price}</p>
              </motion.div>
            ))}
          </div>

          {/* Ad Placements Preview */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border mb-10">
            <h2 className="text-2xl font-bold text-headline mb-6 text-center">
              বিজ্ঞাপনের স্থান
            </h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">বিজ্ঞাপন প্লেসমেন্ট প্রিভিউ</p>
                <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                  <div className="bg-primary/20 h-8 rounded flex items-center justify-center text-xs">
                    হেডার ব্যানার
                  </div>
                  <div className="col-span-2 bg-primary/10 h-8 rounded"></div>
                  <div className="bg-primary/10 h-20 rounded"></div>
                  <div className="col-span-2 bg-primary/10 h-20 rounded"></div>
                  <div className="col-span-3 bg-primary/20 h-8 rounded flex items-center justify-center text-xs">
                    ফুটার ব্যানার
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-primary/5 rounded-lg p-6 md:p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-headline mb-2">
                বিজ্ঞাপন দিতে যোগাযোগ করুন
              </h3>
              <p className="text-muted-foreground">
                আমাদের বিজ্ঞাপন টিম আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজ তৈরি করতে প্রস্তুত।
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <Mail size={18} className="text-primary" />
                <span>ads@softstation71.com</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Phone size={18} className="text-primary" />
                <span>+৮৮০ ১৭XX-XXXXXX</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/contact">
                <Button size="lg">যোগাযোগ করুন</Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Advertising;
