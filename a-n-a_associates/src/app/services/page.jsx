import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
