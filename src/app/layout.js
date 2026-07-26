import { ToastContainer } from "react-toastify";
import { Work_Sans, Syne } from "next/font/google";
import "./globals.scss";

import Head from "next/head";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title:
    "Dr. Andreas Svoboda - Finance & Wealth Planning Expert | Lecturer & Mentor",
  description:
    "Discover the expertise of Dr. Andreas Svoboda—finance and wealth planning expert, lecturer, and mentor. Explore research, achievements, and strategic insights.",
  keywords:
    "Dr. Andreas Svoboda, Andreas Svoboda, Portfolio, Research, CV, Achievements, Lecturer, Mentor, Finance, Wealth, Planning Expert",
  openGraph: {
    title:
      "Dr. Andreas Svoboda - Finance & Wealth Planning Expert | Lecturer & Mentor",
    description:
      "Explore the expertise of Dr. Andreas Svoboda—finance and wealth planning expert, lecturer, and mentor. Discover research, achievements, and insights.",
    url: "https://www.andreassvoboda.com",
    type: "website",
    images: [
      "/logo.png",
      {
        url: "https://www.andreassvoboda.com/person-landing.png",
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
    canonical: "https://www.andreassvoboda.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${workSans.variable} ${syne.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.andreassvoboda.com",
              logo: "https://www.andreassvoboda.com/icon.png",
            }),
          }}
        />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
