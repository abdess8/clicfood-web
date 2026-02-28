import HeroSection from "@/components/HeroSection";
import BeldiStory from "@/components/BeldiStory";
import InteractiveMenu from "@/components/InteractiveMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BeldiStory />
      <InteractiveMenu />
    </div>
  );
}
