import MainLayout from "@/components/layout/MainLayout";
import FeaturedSection from "@/components/news/FeaturedSection";
import LatestNewsGrid from "@/components/news/LatestNewsGrid";
import VideoSection from "@/components/news/VideoSection";

const Index = () => {
  return (
    <MainLayout>
      <FeaturedSection />
      <VideoSection />
      <LatestNewsGrid />
    </MainLayout>
  );
};

export default Index;
