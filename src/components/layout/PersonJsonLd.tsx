import { profile, socials } from "@/data/profile";
import { siteUrl } from "@/lib/site";

/** schema.org Person data so search engines can show a rich result. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: profile.company },
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressCountry: "LK" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Peradeniya" },
    sameAs: Object.values(socials).map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
