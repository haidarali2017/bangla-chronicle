import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const TopHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatBanglaDate = (date: Date) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const banglaMonths = [
      "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
      "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];
    const banglaDays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];

    const day = date.getDate().toString().split("").map(d => banglaDigits[parseInt(d)]).join("");
    const month = banglaMonths[date.getMonth()];
    const year = date.getFullYear().toString().split("").map(d => banglaDigits[parseInt(d)]).join("");
    const weekDay = banglaDays[date.getDay()];

    return `${weekDay}, ${day} ${month} ${year}`;
  };

  const formatBanglaTime = (date: Date) => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "অপরাহ্ণ" : "পূর্বাহ্ণ";
    
    hours = hours % 12 || 12;
    const hoursStr = hours.toString().split("").map(d => banglaDigits[parseInt(d)]).join("");
    const minutesStr = minutes.toString().padStart(2, "0").split("").map(d => banglaDigits[parseInt(d)]).join("");

    return `${hoursStr}:${minutesStr} ${period}`;
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-news rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">প্র</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-headline leading-none">প্রতিদিনের সংবাদ</h1>
              <p className="text-xs text-caption">বাংলাদেশের শীর্ষ সংবাদপত্র</p>
            </div>
          </Link>

          {/* Date & Time - Hidden on mobile */}
          <div className="hidden md:block text-center">
            <p className="text-sm font-medium text-subheadline">{formatBanglaDate(currentTime)}</p>
            <p className="text-xs text-caption">{formatBanglaTime(currentTime)} | বাংলাদেশ সময়</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Social Icons - Hidden on small screens */}
            <div className="hidden lg:flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <LogIn size={16} />
                  <span className="hidden sm:inline">লগইন</span>
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium gradient-news text-primary-foreground rounded-md"
                >
                  <User size={16} />
                  <span className="hidden sm:inline">নিবন্ধন</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default TopHeader;
