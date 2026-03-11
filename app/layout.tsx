import type { Metadata } from "next";

import Header from "../_components/navigation/header";
import Footer from "../_components/navigation/footer";
import RecaptchaProvider from "@/_lib/recaptcha-provider";

import "@/_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://monksmedical.com"),
  title: "Monk's Medical - Dr Kyle Rorke | Plettenberg Bay",
  description:
    "Welcome to Monk's Medical healthcare practice, where we prioritize preventive care and personalized medicine to promote optimal health and well-being. Based in Plettenberg Bay, South Africa",
  keywords:
    "Monk's Medical, Dr Kyle Rorke, Plettenberg Bay, Plett, Preventive Care, Personalized Medicine, Functional Medicine, Holistic Health, Metabolic Health, Sports Medicine, Primary Care, Chronic Disease Management, Men's Health, Women's Health, Paediatric Care, Nutritional Counselling, Mental Health Support, Point-of-Care Diagnostics, Point-of-Care Ultrasound, ImmunoBoost Infusion, Liver Cleanse Elixir, Antioxidant Therapy, Neurological Vitality, Personalized Healthcare, Wellness Services, Integrated Medicine",
  openGraph: {
    description:
      "Welcome to Monk's Medical healthcare practice, where we prioritize preventive care and personalized medicine to promote optimal health and well-being. Based in Plettenberg Bay, South Africa",
    type: "website",
    locale: "en_ZA",
    siteName: "Monk's Medical - Dr Kyle Rorke | Plettenberg Bay",
    images: [
      {
        url: "https://ik.imagekit.io/thewrightdesigns/tr:w-1375,q-75/monks-medical-10.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecaptchaProvider>
          <Header />
          <div className="max-w-[1100px] mx-7 min-[1156px]:mx-auto">
            {children}
          </div>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
