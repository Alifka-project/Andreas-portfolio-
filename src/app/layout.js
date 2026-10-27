import { ToastContainer } from "react-toastify";
import { Work_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";

import Head from "next/head";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://andreassvoboda.com"),
  title:
    "Dr. Andreas Svoboda | Executive, Board Advisor & Lecturer",
  description:
    "Dr. Andreas Svoboda is a financial-services executive, board advisor and lecturer with more than 30 years of experience.",
  keywords:
    "Dr. Andreas Svoboda, Andreas Svoboda, Portfolio, Research, Achievements, Lecturer, Mentor, Finance, Wealth, Planning Expert",
  openGraph: {
    title:
      "Dr. Andreas Svoboda | Executive, Board Advisor & Lecturer",
    description:
      "Executive leadership, board and advisory work, and academic teaching across banking, insurance, wealth and pensions.",
    url: "https://andreassvoboda.com",
    type: "website",
    images: [
      "/logo.png",
      {
        url: "https://andreassvoboda.com/person-landing.png",
        width: 1200,
        height: 630,
        alt: "Dr. Andreas Svoboda - Finance & Wealth Planning Expert",
      },
    ],
  },
  icons: {
    icon: "/logo-rich-result.png",
  },
  alternates: {
    canonical: "https://andreassvoboda.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${workSans.variable} ${jakarta.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://andreassvoboda.com",
              logo: "https://andreassvoboda.com/icon.png",
            }),
          }}
        />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
