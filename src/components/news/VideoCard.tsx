import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  slug: string;
}

const VideoCard = ({ title, thumbnail, duration, slug }: VideoCardProps) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <Link to={`/video/${slug}`} className="block relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
            <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </motion.div>

        {/* Duration Badge */}
        <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </span>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-medium text-sm leading-relaxed line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
};

export default VideoCard;
