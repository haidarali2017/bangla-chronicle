import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SingleNews from "./pages/SingleNews";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Search from "./pages/Search";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SecurityPolicy from "./pages/SecurityPolicy";
import Terms from "./pages/Terms";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/news/:slug" element={<SingleNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/search" element={<Search />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/security-policy" element={<SecurityPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/bangladesh" element={<Category />} />
          <Route path="/international" element={<Category />} />
          <Route path="/sports" element={<Category />} />
          <Route path="/economy" element={<Category />} />
          <Route path="/opinion" element={<Category />} />
          <Route path="/entertainment" element={<Category />} />
          <Route path="/lifestyle" element={<Category />} />
          <Route path="/technology" element={<Category />} />
          <Route path="/education" element={<Category />} />
          <Route path="/health" element={<Category />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
