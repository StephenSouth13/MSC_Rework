// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/header/page";
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
  title: "MSC - Viện Đào tạo Kỹ năng cho Sinh viên & Người đi làm",
  description:
    "MSC - Trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam. Giúp cho học viên và dự án phát triển bền vững.",
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
