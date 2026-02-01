import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Send, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 gradient-news rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">প্র</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-headline">প্রতিদিনের সংবাদ</h1>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-card rounded-xl shadow-lg border border-border p-8">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-headline text-center mb-2">পাসওয়ার্ড পুনরুদ্ধার</h2>
              <p className="text-center text-caption mb-6">
                আপনার ইমেইল ঠিকানা লিখুন। আমরা পাসওয়ার্ড রিসেট লিংক পাঠাবো।
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="form-label">ইমেইল</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-caption" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="আপনার ইমেইল লিখুন"
                      className="input-field pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-3 gradient-news text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  রিসেট লিংক পাঠান
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-success" size={32} />
              </div>
              <h2 className="text-xl font-bold text-headline mb-2">ইমেইল পাঠানো হয়েছে!</h2>
              <p className="text-caption mb-6">
                আমরা <strong>{email}</strong> এ পাসওয়ার্ড রিসেট লিংক পাঠিয়েছি। অনুগ্রহ করে আপনার ইমেইল চেক করুন।
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-primary hover:underline"
              >
                আবার চেষ্টা করুন
              </button>
            </motion.div>
          )}

          {/* Back to Login */}
          <div className="mt-6 pt-6 border-t border-divider">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-sm text-caption hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              লগইন পেজে ফিরে যান
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-caption hover:text-primary">
            ← হোম পেজে ফিরে যান
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
