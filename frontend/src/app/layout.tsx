"use client";

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation";
import FloatingChat from "@/components/FloatingChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <html lang={language} className="scroll-smooth">
      <head>
        <title>MSC - Trung tâm Mentoring kết hợp Coaching</title>
        <meta
          name="description"
          content="MSC - Trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam. Giúp cho học viên và dự án phát triển bền vững."
        />
        <meta
          name="keywords"
          content="MSC, Mentoring, Coaching, đào tạo, kỹ năng mềm, leadership"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
          poppins.variable,
        )}
      >
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "4s" }}
            />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
              }}
            />
          </div>

          {/* Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Navigation */}
        <Navigation language={language} setLanguage={setLanguage} />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Floating Chat */}
        <FloatingChat language={language} />

        {/* Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent flash of unstyled content
              document.documentElement.style.setProperty('--initial-color-mode', 'light');
              
              // Add smooth reveal animation to page
              document.addEventListener('DOMContentLoaded', function() {
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease-in-out';
                setTimeout(() => {
                  document.body.style.opacity = '1';
                }, 100);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
