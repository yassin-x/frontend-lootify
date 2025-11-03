import Contact from "@/components/shared/Contact";
import MainSection from "@/components/shared/MainSection";
import Layout from "@/features/Home/components/Layout";
import OurMission from "@/features/OurUs/components/OurMission";
import OurPartners from "@/features/OurUs/components/OurPartners";
import OurStory from "@/features/OurUs/components/OurStory";
import WhyChooseUs from "@/features/OurUs/components/WhyChooseUs";

export default function OurUs() {
  return (
    <Layout>
      <MainSection
        title="من نحن"
        subTitle="نسعى لتقديم منتجات تقنية عالية الجودة بأفضل الأسعار وخدمة عملاء مميزة."
      />
      <OurMission />
      <OurStory />
      <WhyChooseUs />
      <OurPartners />
      <Contact />
    </Layout>
  );
}
