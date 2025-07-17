// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/page";
import { Montserrat, Roboto_Slab, Open_Sans } from "next/font/google";


// Cấu hình font chữ
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-roboto-slab",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "800"],
  variable: "--font-open-sans",
});

// Metadata trang
export const metadata: Metadata = {
  // Kết hợp các thẻ description và keywords
  description: "MSC - Trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam. Giúp cho học viên và dự án phát triển bền vững, với đội ngũ tư vấn, thiết kế và huấn luyện chuyên nghiệp.",
  keywords: "MSC, Trung tâm đào tạo kỹ năng, mentoring, coaching, người đi làm, phát triển dự án, nhân sự kế thừa",
  authors: [{ name: "MSC Team" }],
  robots: "index, follow",
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/msc/assets/logo/apple-touch-icon.png',
    other: [
        { rel: 'icon', sizes: '192x192', url: '/favicon/android-chrome-192x192.png' },
        { rel: 'icon', sizes: '512x512', url: '/favicon/android-chrome-512x512.png' },
    ]
  },
  
  // Manifest
  manifest: '/favicon/site.webmanifest',
  
  // Canonical URL
  alternates: {
    canonical: 'https://msc.edu.vn/',
  },

  // Open Graph (Facebook, Zalo)
  openGraph: {
    title: "MSC - Đào tạo Kỹ năng cho Sinh viên và Người đi làm",
    description: "Khám phá các khóa học kỹ năng mềm tại MSC, nơi đào tạo chuyên nghiệp cho sinh viên và người đi làm.",
    url: "https://msc.edu.vn/",
    images: 'https://msc.edu.vn/msc/assets/logo/logo.png',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "MSC - Đào tạo Kỹ năng cho Sinh viên và Người đi làm",
    description: "Khám phá các khóa học kỹ năng mềm tại MSC, nơi đào tạo chuyên nghiệp cho sinh viên và người đi làm.",
    //images: ['https://msc.edu.vn/msc/assets/logo/logo.png'],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${montserrat.variable} ${robotoSlab.variable} ${openSans.variable}`}
    >
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
