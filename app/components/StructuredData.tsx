const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uraru AI",
  url: "https://www.uraruai.com",
  description:
    "AI automation agency building AI infrastructure, automated workflows, and custom AI platforms.",
  founder: {
    "@type": "Person",
    name: "Jakob Kavčič",
  },
  sameAs: ["https://www.linkedin.com/company/uraru-ai"],
  areaServed: "Worldwide",
  knowsAbout: [
    "AI automation",
    "workflow automation",
    "AI agents",
    "LLM integration",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
