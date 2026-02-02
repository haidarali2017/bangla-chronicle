import { motion } from "framer-motion";
import { Facebook, Twitter, Share2, Printer, Link2, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url?: string;
  showPrint?: boolean;
  size?: "sm" | "md";
}

const ShareButtons = ({ title, url, showPrint = false, size = "md" }: ShareButtonsProps) => {
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const iconSize = size === "sm" ? 14 : 16;
  const buttonSize = size === "sm" ? "w-7 h-7" : "w-8 h-8";

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleWhatsAppShare = () => {
    window.open(
      `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      "_blank"
    );
  };

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("লিংক কপি করা হয়েছে!");
    } catch {
      toast.error("লিংক কপি করতে ব্যর্থ হয়েছে");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFacebookShare}
        className={`${buttonSize} rounded-full bg-[#1877F2] flex items-center justify-center text-white`}
        title="ফেসবুকে শেয়ার করুন"
      >
        <Facebook size={iconSize} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleTwitterShare}
        className={`${buttonSize} rounded-full bg-[#1DA1F2] flex items-center justify-center text-white`}
        title="টুইটারে শেয়ার করুন"
      >
        <Twitter size={iconSize} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppShare}
        className={`${buttonSize} rounded-full bg-[#25D366] flex items-center justify-center text-white`}
        title="হোয়াটসঅ্যাপে শেয়ার করুন"
      >
        <MessageCircle size={iconSize} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLinkedInShare}
        className={`${buttonSize} rounded-full bg-[#0A66C2] flex items-center justify-center text-white`}
        title="লিংকডইনে শেয়ার করুন"
      >
        <Share2 size={iconSize} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopyLink}
        className={`${buttonSize} rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground`}
        title="লিংক কপি করুন"
      >
        <Link2 size={iconSize} />
      </motion.button>

      {showPrint && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className={`${buttonSize} rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground`}
          title="প্রিন্ট করুন"
        >
          <Printer size={iconSize} />
        </motion.button>
      )}
    </div>
  );
};

export default ShareButtons;
