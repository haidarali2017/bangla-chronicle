import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  slug: string;
  size?: "small" | "medium" | "large";
}

const NewsCard = ({
  title,
  excerpt,
  image,
  category,
  author,
  publishDate,
  slug,
  size = "medium",
}: NewsCardProps) => {
  const sizeClasses = {
    small: "flex gap-3",
    medium: "flex flex-col",
    large: "flex flex-col md:flex-row gap-4",
  };

  const imageClasses = {
    small: "w-24 h-20 flex-shrink-0",
    medium: "w-full aspect-video",
    large: "w-full md:w-1/2 aspect-video",
  };

  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={`news-card ${sizeClasses[size]}`}
    >
      <Link to={`/news/${slug}`} className={imageClasses[size]}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        />
      </Link>

      <div className={`p-4 flex flex-col ${size === "large" ? "md:w-1/2 justify-center" : "flex-1"}`}>
        <Link
          to={`/category/${category.toLowerCase()}`}
          className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-2 w-fit"
        >
          {category}
        </Link>

        <Link to={`/news/${slug}`}>
          <h3
            className={`news-title ${
              size === "small" ? "text-sm" : size === "large" ? "text-xl md:text-2xl" : "text-lg"
            } line-clamp-2`}
          >
            {title}
          </h3>
        </Link>

        {size !== "small" && (
          <p className={`news-excerpt mt-2 line-clamp-2 ${size === "large" ? "text-base" : "text-sm"}`}>
            {excerpt}
          </p>
        )}

        <div className="flex items-center gap-4 mt-3 text-caption">
          <span className="flex items-center gap-1 text-xs">
            <User size={12} />
            {author}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Clock size={12} />
            {publishDate}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;
