import { motion } from "framer-motion";
import TopHeader from "./TopHeader";
import Navigation from "./Navigation";
import BreakingMarquee from "./BreakingMarquee";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const MainLayout = ({ children, showSidebar = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopHeader />
      <Navigation />
      <BreakingMarquee />

      <main className="flex-1 container mx-auto px-4 py-6">
        {showSidebar ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8"
            >
              {children}
            </motion.div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
