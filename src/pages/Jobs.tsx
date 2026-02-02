import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, MapPin, Briefcase, Clock, Building2, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allJobs = [
  {
    id: "1",
    title: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
    company: "টেকসল্যুশন বিডি",
    location: "ঢাকা",
    type: "ফুলটাইম",
    salary: "৮০,০০০ - ১,২০,০০০ টাকা",
    deadline: "১৫ ফেব্রুয়ারি, ২০২৬",
    category: "তথ্যপ্রযুক্তি",
  },
  {
    id: "2",
    title: "মার্কেটিং ম্যানেজার",
    company: "গ্লোবাল ট্রেড লিমিটেড",
    location: "চট্টগ্রাম",
    type: "ফুলটাইম",
    salary: "৬০,০০০ - ৮০,০০০ টাকা",
    deadline: "২০ ফেব্রুয়ারি, ২০২৬",
    category: "মার্কেটিং",
  },
  {
    id: "3",
    title: "অ্যাকাউন্ট্যান্ট",
    company: "ফিনান্স প্রো",
    location: "ঢাকা",
    type: "ফুলটাইম",
    salary: "৪০,০০০ - ৫৫,০০০ টাকা",
    deadline: "২৫ ফেব্রুয়ারি, ২০২৬",
    category: "একাউন্টিং",
  },
  {
    id: "4",
    title: "গ্রাফিক ডিজাইনার",
    company: "ক্রিয়েটিভ স্টুডিও",
    location: "ঢাকা",
    type: "পার্টটাইম",
    salary: "২৫,০০০ - ৩৫,০০০ টাকা",
    deadline: "২৮ ফেব্রুয়ারি, ২০২৬",
    category: "ডিজাইন",
  },
  {
    id: "5",
    title: "কন্টেন্ট রাইটার",
    company: "মিডিয়া হাউস বিডি",
    location: "রিমোট",
    type: "ফ্রিল্যান্স",
    salary: "প্রতি আর্টিকেল ১,০০০ - ২,০০০ টাকা",
    deadline: "১০ মার্চ, ২০২৬",
    category: "মিডিয়া",
  },
  {
    id: "6",
    title: "সেলস এক্সিকিউটিভ",
    company: "ইলেকট্রনিক্স মার্ট",
    location: "সিলেট",
    type: "ফুলটাইম",
    salary: "২৫,০০০ - ৪০,০০০ টাকা + কমিশন",
    deadline: "১৫ মার্চ, ২০২৬",
    category: "বিক্রয়",
  },
  {
    id: "7",
    title: "HR অফিসার",
    company: "কর্পোরেট সলিউশন",
    location: "ঢাকা",
    type: "ফুলটাইম",
    salary: "৪৫,০০০ - ৬০,০০০ টাকা",
    deadline: "২০ মার্চ, ২০২৬",
    category: "মানবসম্পদ",
  },
  {
    id: "8",
    title: "ডাটা এন্ট্রি অপারেটর",
    company: "ই-কমার্স বাংলা",
    location: "ঢাকা",
    type: "ফুলটাইম",
    salary: "১৮,০০০ - ২৫,০০০ টাকা",
    deadline: "২৫ মার্চ, ২০২৬",
    category: "প্রশাসন",
  },
];

const categories = [
  "সব ক্যাটাগরি",
  "তথ্যপ্রযুক্তি",
  "মার্কেটিং",
  "একাউন্টিং",
  "ডিজাইন",
  "মিডিয়া",
  "বিক্রয়",
  "মানবসম্পদ",
  "প্রশাসন",
];

const locations = ["সব স্থান", "ঢাকা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "খুলনা", "রিমোট"];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("সব ক্যাটাগরি");
  const [selectedLocation, setSelectedLocation] = useState("সব স্থান");

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "সব ক্যাটাগরি" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "সব স্থান" || job.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-headline mb-6">চাকরির খবর</h1>

        {/* Search & Filters */}
        <div className="bg-card rounded-lg p-4 shadow-sm border border-border mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="চাকরি বা প্রতিষ্ঠান খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="ক্যাটাগরি" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin size={16} className="mr-2" />
                <SelectValue placeholder="স্থান" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground mb-4">
          মোট {filteredJobs.length}টি চাকরি পাওয়া গেছে
        </p>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-card rounded-lg p-5 shadow-sm border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {job.category}
                    </span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-headline mb-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building2 size={14} />
                    <span className="text-sm">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      শেষ তারিখ: {job.deadline}
                    </span>
                  </div>
                </div>
                <Button className="flex-shrink-0">
                  বিস্তারিত
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোনো চাকরি পাওয়া যায়নি</p>
          </div>
        )}

        {/* Post Job CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-primary/5 rounded-lg p-6 mt-8 text-center"
        >
          <h3 className="text-xl font-bold text-headline mb-2">
            চাকরির বিজ্ঞাপন দিতে চান?
          </h3>
          <p className="text-muted-foreground mb-4">
            আপনার প্রতিষ্ঠানের জন্য যোগ্য প্রার্থী খুঁজুন।
          </p>
          <Button variant="outline">বিজ্ঞাপন দিন</Button>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default Jobs;
