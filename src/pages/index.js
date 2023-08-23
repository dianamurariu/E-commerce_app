import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import HeroHeader from "@/components/homepage/hero-header";
import CategoryGrid from "@/components/homepage/category-grid";
import ProductSlider from "@/components/homepage/product-slider";
import PromoSection from "@/components/homepage/promo-section";
import ContactSection from "@/components/homepage/contact-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroHeader />
      <CategoryGrid />
      <ProductSlider />
      <PromoSection />
      <ContactSection />
    </Layout>
  );
}
