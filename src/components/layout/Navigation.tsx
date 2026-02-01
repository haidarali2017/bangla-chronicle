import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "সর্বশেষ", href: "/" },
  { label: "আজকের পত্রিকা", href: "/todays-paper" },
  { label: "বাংলাদেশ", href: "/bangladesh" },
  { label: "আন্তর্জাতিক", href: "/international" },
  { label: "খেলা", href: "/sports" },
  { label: "অর্থনীতি", href: "/economy" },
  { label: "মতামত", href: "/opinion" },
  {
    label: "আরো",
    href: "#",
    submenu: [
      { label: "বিনোদন", href: "/entertainment" },
      { label: "জীবনযাপন", href: "/lifestyle" },
      { label: "প্রযুক্তি", href: "/technology" },
      { label: "শিক্ষা", href: "/education" },
      { label: "স্বাস্থ্য", href: "/health" },
      { label: "চাকরি", href: "/jobs" },
    ],
  },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`nav-link flex items-center gap-1 ${
                      activeDropdown === item.label ? "nav-link-active" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50"
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Search Button */}
          <Link
            to="/search"
            className="hidden lg:flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Search size={18} />
            <span>অনুসন্ধান</span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Link to="/search">
              <Search size={20} className="text-muted-foreground" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border"
            >
              <ul className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted rounded-md"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-muted/50 rounded-md ml-4 mt-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    to={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-2.5 text-sm text-foreground hover:text-primary"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-md ${
                          isActive(item.href)
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
