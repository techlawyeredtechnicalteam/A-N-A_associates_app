import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Legal Services - A.N.A & Associates</title>
        <meta
          name="description"
          content="Comprehensive legal services including corporate law, civil litigation, property law, and insolvency matters in Lagos, Nigeria."
        />
        <meta
          name="keywords"
          content="legal services Lagos, corporate law Nigeria, civil litigation, property law, insolvency law"
        />
        <link
          rel="canonical"
          href="https://anaassociates.vercel.app/services"
        />
      </Head>

      <div>
        <Header />
        <main>
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
