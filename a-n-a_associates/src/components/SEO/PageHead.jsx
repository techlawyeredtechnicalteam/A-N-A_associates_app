import Head from "next/head";
import {
  legalServiceSchema,
  breadcrumbSchema,
  generateSchemaScript
} from "@/utils/structuredData";

export const PageHead = () => (
  <Head>
    <title>
      A.N.A & Associates - Leading Law Firm in Lagos, Nigeria | Adekunle
      Aribisala
    </title>
    <meta
      name="description"
      content="Learn about A.N.A & Associates, a full-service law firm in Lagos, Nigeria. Led by Managing Partner Adekunle Aribisala with over a decade of legal expertise in corporate law, civil litigation, property law, and insolvency."
    />
    <meta
      name="keywords"
      content="A.N.A Associates, ANA Associates, Lagos law firm, Nigerian lawyers, Adekunle Aribisala, corporate law Nigeria, civil litigation Lagos, property law Nigeria, insolvency law, legal services Lagos"
    />
    <meta name="author" content="A.N.A & Associates" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="http://anaandassociates.com/about" />

    {/* Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={generateSchemaScript(legalServiceSchema)}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={generateSchemaScript(breadcrumbSchema)}
    />
  </Head>
);
