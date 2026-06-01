import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shepway Commercial | Ceilings, Fire Protection, Acoustics & Property Services",
  description:
    "Kent's leading multi-discipline interior fit-out contractor. FIRAS & BM TRADA accredited. 60 years of family expertise in ceilings, partitions, fire protection, acoustics and property services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
