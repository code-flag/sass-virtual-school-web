import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    {/* <Header /> */}
      <Breadcrumb
        pageName=""
        description=""
      />

      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;
