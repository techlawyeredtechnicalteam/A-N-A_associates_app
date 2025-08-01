// pages/index.js or your main page

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import AboutPage from "@/components/AboutPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>A.N.A & Associates - Leading Law Firm in Lagos, Nigeria</title>
        <meta
          name="description"
          content="A.N.A & Associates - Full-service law firm in Lagos, Nigeria. Expert legal services in corporate law, civil litigation, property law, and insolvency matters."
        />
      </Head>

      <div>
        <Header />
        <main>
          {/* Hero Section */}
          <section>
            <Hero />
          </section>
          {/* About Section */}
          <section>
            <AboutPage />
          </section>
          {/* Services Section */}
          <section id="services">
            <Services />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
