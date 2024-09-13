import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
     <Header />
      <Breadcrumb
        pageName="About Page"
        description="Our platform is meticulously designed to streamline every aspect of school management, empowering educators, administrators, and parents to focus on what truly matters—the students' success. With comprehensive features such as lesson note and plan creation, seamless assessment tracking, real-time attendance monitoring, and detailed report generation, we provide a unified solution for all your school management needs. Our platform also ensures that parents stay informed and engaged, offering a clear view of their child's progress and school activities. Every feature is crafted with the unique needs of schools in mind, ensuring that your institution operates efficiently and effectively, fostering an environment where students can thrive."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Footer />
    </>
  );
};

export default AboutPage;
