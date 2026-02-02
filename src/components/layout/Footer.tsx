import { motion } from "framer-motion";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const banglaYear = currentYear.toString().split("").map(d => {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return banglaDigits[parseInt(d)];
  }).join("");

  const footerLinks = {
    company: [
      { label: "আমাদের সম্পর্কে", href: "/about" },
      { label: "যোগাযোগ", href: "/contact" },
      { label: "বিজ্ঞাপন", href: "/advertising" },
      { label: "ক্যারিয়ার", href: "/career" },
      { label: "চাকরি", href: "/jobs" },
    ],
    legal: [
      { label: "গোপনীয়তা নীতি", href: "/privacy-policy" },
      { label: "নিরাপত্তা নীতি", href: "/security-policy" },
      { label: "শর্তাবলী", href: "/terms" },
    ],
    categories: [
      { label: "বাংলাদেশ", href: "/bangladesh" },
      { label: "আন্তর্জাতিক", href: "/international" },
      { label: "খেলা", href: "/sports" },
      { label: "অর্থনীতি", href: "/economy" },
      { label: "বিনোদন", href: "/entertainment" },
      { label: "আজকের পত্রিকা", href: "/todays-paper" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Softstation 71" className="h-10" />
            </Link>
            <p className="text-sm text-background/70 mb-4 leading-relaxed">
              Softstation 71 - বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন সংবাদপত্র। সর্বশেষ খবর, বিশ্লেষণ এবং মতামত প্রকাশ করে।
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">প্রতিষ্ঠান</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">বিভাগসমূহ</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">যোগাযোগ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>2nd Floor,House#19 , Road No : 5 Benaroshi Polli, Mirpur-10 Dhaka, 1216</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+880 1521 49 51 94</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@softstation71.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {banglaYear} Softstation 71। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
