import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { FloatingEmergencyButton } from "@/components/ui/FloatingEmergencyButton";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { CursorFollow } from "@/components/animations/CursorFollow";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SmileCare Dental | Your Smile, Reimagined by AI + Expert Care",
  description:
    "Experience award-winning modern dentistry powered by AI. Book in 60 seconds, access your patient portal, and receive world-class care from our expert team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interTight.variable} font-sans antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("scrollRestoration" in history) history.scrollRestoration = "manual";
              window.scrollTo(0, 0);
            `,
          }}
        />
        <Providers>
          <ScrollToTop />
          {children}
          <FloatingEmergencyButton />
          <LanguageToggle />
          <CursorFollow />
        </Providers>
      </body>
    </html>
  );
}
