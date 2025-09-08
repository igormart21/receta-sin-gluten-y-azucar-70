import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import RecipeVarietySection from "@/components/RecipeVarietySection";
import EbookContentSection from "@/components/EbookContentSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <RecipeVarietySection />
      <EbookContentSection />
      <TestimonialCarousel />
      <VideoSection />
      <PricingSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
