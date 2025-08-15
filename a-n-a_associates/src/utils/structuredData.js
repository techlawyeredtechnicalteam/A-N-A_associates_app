// JSON-LD structured data for SEO
export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "A.N.A & Associates",
  alternateName: "ANA Associates",
  description:
    "A modern and full-service law firm based in Lagos, Nigeria, committed to providing exceptional legal solutions with integrity and excellence.",
  url: "https://anaassociates.vercel.app/about",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "1st Floor, Scapular Plaza, Igbo Efon Bus-stop, Lekki Epe Expressway",
    addressLocality: "Lekki",
    addressRegion: "Lagos",
    addressCountry: "Nigeria",
    postalCode: "101245"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.4474",
    longitude: "3.5706"
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
  founder: {
    "@type": "Person",
    name: "Adekunle Aribisala",
    jobTitle: "Managing Partner",
    description:
      "Seasoned legal practitioner with over a decade of experience in diverse areas of law",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Ibadan",
        description: "Bachelor of Laws (LL.B) - 2011"
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Lagos",
        description: "Master of Laws (LL.M) - 2018"
      }
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Nigerian Bar Association",
        abbreviation: "NBA"
      },
      {
        "@type": "Organization",
        name: "Business Recovery and Insolvency Practitioners Association of Nigeria",
        abbreviation: "BRIPAN"
      }
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Notary Public of Nigeria"
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Called to Nigerian Bar - 2012"
      }
    ]
  },
  serviceArea: {
    "@type": "Country",
    name: "Nigeria"
  },
  areaServed: ["Lagos, Nigeria", "Nigeria"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate and Commercial Law",
          description:
            "Strategic legal advice for businesses including company formation, governance, and regulatory compliance"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Civil Litigation",
          description:
            "Strategic litigation services across all levels of Nigerian courts"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property and Real Estate Law",
          description:
            "Comprehensive real estate legal services covering property acquisition and title perfection"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Insolvency and Debt Recovery",
          description:
            "Comprehensive insolvency and debt recovery services with accredited practitioners"
        }
      }
    ]
  },
  serviceArea: {
    "@type": "Country",
    name: "Nigeria"
  },
  areaServed: "Lagos, Nigeria"
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ana-associates.com"
    },
    {
      "@type": "ListItem", 
      position: 2,
      name: "About",
      item: "https://ana-associates.com/about"
    }
  ]
}

export const generateSchemaScript = (schema) => ({
  _html: JSON.stringify(schema)
})

// for homepage
export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "A.N.A & Associates",
  alternateName: "ANA Associates",
  url: "https://ana-associates.com",
  logo: "https://ana-associates.com/logo.png",
  description:
    "Leading law firm in Lagos, Nigeria providing comprehensive legal services",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "1st Floor, Scapular Plaza, Igbo Efon Bus-stop, Lekki Epe Expressway",
    addressLocality: "Lekki",
    addressRegion: "Lagos",
    addressCountry: "Nigeria",
    postalCode: "101245"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"]
  },
  sameAs: [
    // Add your social media links here when you have them
    "https://www.instagram.com/anaandassociates?igsh=MWluM3o0d2h4ZzMyag",
    ""
  ]
};
