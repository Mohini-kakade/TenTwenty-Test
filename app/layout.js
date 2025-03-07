
import "./globals.css";

export const metadata = {
  title: "Tentwenty Farms | Organic & Sustainable Farming",
  description:
    "Experience the best organic produce from Tentwenty Farms. Sustainable, fresh, and directly from the farm to your table.",
  openGraph: {
    title: "Tentwenty Farms | Organic & Sustainable Farming",
    description:
      "Experience the best organic produce from Tentwenty Farms. Sustainable, fresh, and directly from the farm to your table.",
    url: "https://tentwenty-farms.vercel.app/",
    type: "website",
  },
  other: {
    "google-site-verification": "googleb86070f67c56b543",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="organic farming, sustainable agriculture, Tentwenty Farms, fresh produce, farm-to-table, natural farming"
        />
        <meta name="author" content="Tentwenty Farms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tentwenty Farms",
              url: "https://tentwenty-farms.vercel.app/",
              description:
                "Tentwenty Farms specializes in organic and sustainable farming, delivering fresh and healthy produce directly from the farm.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1234567890",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
