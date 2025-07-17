// app/page.tsx
"use client"; // Đánh dấu đây là Client Component vì có nhiều tương tác

import styles from '/Home.module.css';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

// Metadata không hoạt động trong Client Component, bạn phải đặt nó trong layout.tsx
// hoặc trong một Server Component cha. Tuy nhiên, để tiện cho việc chuyển đổi,
// tôi sẽ comment nó ở đây để bạn biết các thẻ meta được chuyển đổi như thế nào.
/*
export const metadata: Metadata = {
  // Kết hợp các thẻ description và keywords
  description: "MSC - Trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam. Giúp cho học viên và dự án phát triển bền vững, với đội ngũ tư vấn, thiết kế và huấn luyện chuyên nghiệp.",
  keywords: "MSC, Trung tâm đào tạo kỹ năng, mentoring, coaching, người đi làm, phát triển dự án, nhân sự kế thừa",
  authors: [{ name: "MSC Team" }],
  robots: "index, follow",
  
  // Icons
  icons: {
    icon: [
      { url: '/msc/assets/logo/favicon.ico', type: 'image/x-icon' },
      { url: '/msc/assets/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/msc/assets/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/msc/assets/logo/apple-touch-icon.png',
    other: [
        { rel: 'icon', sizes: '192x192', url: '/msc/assets/logo/android-chrome-192x192.png' },
        { rel: 'icon', sizes: '512x512', url: '/msc/assets/logo/android-chrome-512x512.png' },
    ]
  },
  
  // Manifest
  manifest: '/msc/assets/logo/site.webmanifest',
  
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
    images: ['https://msc.edu.vn/msc/assets/logo/logo.png'],
  },
};
*/


export default function HomePage() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const mscWrapperRef = useRef<HTMLDivElement>(null);
    const [activeNewsTab, setActiveNewsTab] = useState('share');

    // Logic cho nút Back to Top
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Logic cho MSCer carousel
    const scrollMscCarousel = (direction: 'prev' | 'next') => {
        if (mscWrapperRef.current) {
            const wrapper = mscWrapperRef.current;
            const itemWidth = wrapper.querySelector('.msc-item')?.clientWidth || 0;
            const gap = 24; // Dựa trên CSS
            const scrollAmount = itemWidth + gap;

            if (direction === 'next') {
                wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };
  
  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-right">
          <div className="topbar-left">
            <a className="lang-btn"><Image src="https://cdn-icons-png.flaticon.com/512/197/197473.png" alt="vi" width={24} height={24} /> </a>
            <a className="lang-btn"><Image src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="en" width={24} height={24} /> </a>
          </div>
          <div className="d-flex">
            <Link href="/login" target="_blank"><button className="profile-btn">Đăng Nhập</button></Link>
            <Link className="d-done" href="/register" target="_blank"><button className="profile-btn">Đăng Ký</button></Link>
            <Link className="d-done" href="/profile" target="_blank"><button className="profile-btn">Hồ sơ năng lực</button></Link>
          </div>
        </div>
      </div>

      {/* Header + Navbar */}
      <header id="header">
        <div className="logo">
          <Link href="/"><Image src="/msc/assets/logo/LogoMSC.webp" alt="MSC Logo" width={150} height={50} priority /></Link>
        </div>
        <nav className="navbar">
          <div className="mobile-nav-toggle" id="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
            <i className="bi bi-list"></i>
          </div>
          <ul className="nav-menu">
            <li><Link href="/trang-con/gioi-thieu">GIỚI THIỆU</Link></li>
            <li><Link href="/trang-con/dao-tao">ĐÀO TẠO</Link></li>
            <li><Link href="/trang-con/du-an">DỰ ÁN</Link></li>
            <li><Link href="/trang-con/mentor">MENTORS</Link></li>
            <li><Link href="/trang-con/mscer">MSCer</Link></li>
            <li><Link href="/trang-con/dong-hanh">ĐỒNG HÀNH</Link></li>
            <li><Link href="/trang-con/chia-se">CHIA SẺ</Link></li>
            <li><Link href="/trang-con/lien-he">LIÊN HỆ</Link></li>
          </ul>
        </nav>
        {isMobileMenuOpen && <div className="mobile-overlay" id="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
      </header>

      {/* Menu Mobile */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-mobile-menu">
        <div className="mobile-header">
          <span>MENU</span>
          <button id="mobile-close" onClick={() => setMobileMenuOpen(false)}><i className="bi bi-x-lg"></i></button>
        </div>
        <ul className="nav-mobile">
            {/* ... lặp lại các link như trên */}
        </ul>
      </div>

      {/* Floating Icons */}
      <div className="floating-contact">
        <a href="https://www.facebook.com/msc.edu.vn" className="contact-btn fb-btn" target="_blank" rel="noopener noreferrer">
          <Image src="/msc/assets/logo/fb.png" alt="Facebook" width={40} height={40} />
        </a>
        <a href="https://zalo.me/g/acumou501" className="contact-btn zalo-btn" target="_blank" rel="noopener noreferrer">
          <Image src="/msc/assets/logo/zalo.webp" alt="Zalo" width={40} height={40} />
        </a>
        {showBackToTop && (
            <button onClick={scrollToTop} id="back-to-top" className="back-to-top">
                <i className="bi bi-arrow-up"></i>
            </button>
        )}
      </div>

      {/* Hero Video */}
      <section className="hero-video">
        <div className="video-container">
          <div className="video-slide">
            <video src="/msc/assets/video/Intro.mp4" autoPlay muted loop playsInline preload="auto"></video>
          </div>
        </div>
      </section>

      {/* Các dự án */}
      <section id="du-an">
        <div className="du-an-container">
            <h2 className="du-an-title">DỰ ÁN ĐÃ TRIỂN KHAI CỦA MSC</h2>
            <h2 className="typewriter-text" style={{ textAlign: 'center', fontSize: '16px', color: '#555', marginBottom: '40px', lineHeight: 1.6 }}>
              MSC là trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam.<br />Giúp cho học viên và các dự án phát triển chuyên nghiệp và bền vững
            </h2>
            <div className="du-an-grid">
                {/* Card Dự án - Ví dụ 1 */}
                <div className="du-an-card">
                    <Image src="/msc/assets/project/SCVH.webp" alt="Nông Trại Hải Vân" width={400} height={250} style={{width: '100%', height: 'auto'}} />
                    <h3>Dự án: Nông Trại Hải Vân- Sân Chim Vàm Hồ </h3>
                    <p><strong>👉Mentoring & Coaching:</strong> Đào tạo đội ngũ Sales & Marketing</p>
                    <p><strong>👉Ban Giảng Huấn:</strong> Phan Huỳnh Anh <br />& Trần Lê Bảo Châu</p>
                    <a href="#" className="btn">Chi tiết </a>
                </div>
                 {/* ... Các card dự án khác tương tự, thay img bằng Image */}
            </div>
            <div className="du-an-button">
              <Link href="/trang-con/du-an" className="btn btn-outline">Các dự án khác</Link>
            </div>
        </div>
      </section>

      {/* Ban giảng huấn */}
      <section className="mentor-section">
        <h2 className="mentor-title">BAN GIẢNG HUẤN</h2>
        <div id="tab-description" className="subtext">
          Đội ngũ trực tiếp tư vấn, thiết kế và huấn luyện cho các chương trình đào tạo và dự án tại MSC
        </div>
        <div className="tab-content">
            <div className="tab-panel" id="giang-huan" style={{ display: 'block' }}>
                <div className="mentor-grid">
                    {/* Mentor Card - Ví dụ 1 */}
                    <div className="mentor-card">
                        <Link href="/cv/pha/pha" title="Profile">
                            <div className="mentor-image">
                                <Image src="/msc/assets/members/PHAvuong.jpg" alt="Phan Huỳnh Anh" width={200} height={200} />
                            </div>
                        </Link>
                        <div className="mentor-info">
                            <h3>Phan Huỳnh Anh</h3>
                            <p className="position highlight">Tiến Sĩ Kinh tế</p>
                            <div className="contact-info">
                                <p>Chủ tịch HĐQT Công ty Smentor</p>
                            </div>
                        </div>
                    </div>
                     {/* ... Các card mentor khác tương tự */}
                </div>
            </div>
        </div>
      </section>
      
      {/* Ban Chủ Nhiệm */}
      <section className="chu-nhiem">
        <h2>BAN CHỦ NHIỆM</h2>
        <p className="subtext">
            Là đội ngũ nòng cốt chịu trách nhiệm vận hành và phát triển Trung tâm MSC.<br />
            Ban Chủ Nhiệm đóng vai trò điều phối toàn diện các dự án, kết nối<br />
            nguồn lực và đảm bảo MSC hoạt động hiệu quả, đúng định hướng.
        </p>
        <div className="chu-nhiem-grid">
            {/* Item Ban Chủ Nhiệm - Ví dụ 1 */}
            <div className="chu-nhiem-item">
                <Link href="/cv/dtk/dtk" title="Profile">
                    <Image src="/msc/assets/members/DTK.webp" alt="Dương Thế Khải" width={150} height={150} />
                    <h4>Dương Thế Khải</h4>
                    <p>Phó Giám Đốc MSC Center</p>
                </Link>
            </div>
            {/* ... Các item khác tương tự */}
        </div>
      </section>

      {/* MSCers Member Carousel */}
      <div className="msc-container">
        <h2>MSCers Member</h2>
        <p className="subtext">Những học viên xuất sắc và trưởng thành từ MSC</p>
        <button className="msc-nav msc-prev" onClick={() => scrollMscCarousel('prev')}>
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="msc-wrapper" ref={mscWrapperRef}>
            {/* Item MSCer - Ví dụ 1 */}
            <div className="msc-item">
                <div className="msc-image">
                    <Image src="/msc/assets/members/DTK.webp" alt="Dương Thế Khải" width={180} height={180} />
                </div>
                <div className="msc-title">Dương Thế Khải</div>
            </div>
            {/* ... Các item MSCer khác tương tự */}
        </div>
        <button className="msc-nav msc-next" onClick={() => scrollMscCarousel('next')}>
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      {/* Chia sẻ */}
      <section className="news-section">
        <div className="news-header">
            <h2 className="news-title-center">CHIA SẺ</h2>
            <div className="news-tabs">
                <button className={`tab ${activeNewsTab === 'share' ? 'active' : ''}`} onClick={() => setActiveNewsTab('share')}>Chia sẻ</button>
                <button className={`tab ${activeNewsTab === 'hotnews' ? 'active' : ''}`} onClick={() => setActiveNewsTab('hotnews')}>Tin tức nổi bật</button>
            </div>
        </div>
        <div className="news-tabs-content">
            <div className={`tab-pane ${activeNewsTab === 'share' ? 'active' : ''}`}>
                <div className="news-list">
                    {/* News Item - Ví dụ 1 */}
                    <div className="news-item">
                        <Image src="/msc/assets/thumbnail/kaizen.webp" alt="Kaizen" width={300} height={180} style={{width: '100%', height: 'auto'}}/>
                        <h3>Muốn phát triển liên tục - Phải có Kaizen!</h3>
                        <p>Kaizen là triết lý cải tiến liên tục, giúp doanh nghiệp luôn đổi mới và nâng cao chất lượng.</p>
                    </div>
                     {/* ... Các news item khác tương tự */}
                </div>
            </div>
            <div className={`tab-pane ${activeNewsTab === 'hotnews' ? 'active' : ''}`}>
                <div className="news-list">
                    {/* Nội dung cho tab tin tức nổi bật */}
                </div>
            </div>
        </div>
      </section>

      {/* Đối tác đồng hành */}
      <section className="carousel-section">
        <div className="container-title">
            <div className="section-title"><h2>ĐỐI TÁC ĐỒNG HÀNH</h2></div>
        </div>
        <div className="carousel-container">
            <div className="carousel-track">
                {/* Lặp lại 2 lần để tạo hiệu ứng vô tận */}
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <Image src="/msc/assets/carousel/ASL.webp" alt="ASL" height={60} width={120} />
                        <Image src="/msc/assets/carousel/Binemo.webp" alt="Binemo" height={60} width={120} />
                        <Image src="/msc/assets/carousel/BNI.webp" alt="BNI" height={60} width={120} />
                        <Image src="/msc/assets/carousel/CP.webp" alt="CP" height={60} width={120} />
                        <Image src="/msc/assets/carousel/CSMO.webp" alt="CSMO" height={60} width={120} />
                        <Image src="/msc/assets/carousel/Greenfeed.webp" alt="Greenfeed" height={60} width={120} />
                        <Image src="/msc/assets/carousel/Happyland.webp" alt="Happyland" height={60} width={120} />
                        <Image src="/msc/assets/carousel/HTOGroup.webp" alt="HTOGroup" height={60} width={120} />
                    </React.Fragment>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* ... Nội dung footer giữ nguyên, chỉ cần thay <img> bằng <Image> */}
      </footer>

      {/* Scripts */}
      <div id="fb-root"></div>
      <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v22.0" nonce="abc123" strategy="lazyOnload" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>
      <Script id="version-checker" strategy="lazyOnload">
        {`
            let currentVersion = null;
            async function checkVersion() {
                try {
                    const response = await fetch('/version.json?_=' + Date.now());
                    const data = await response.json();
                    if (currentVersion && data.version !== currentVersion) {
                        console.log("New version detected. Reloading...");
                        location.reload(true);
                    }
                    currentVersion = data.version;
                } catch (error) {
                    console.error("Không thể kiểm tra phiên bản:", error);
                }
            }
            setInterval(checkVersion, 10000);
            checkVersion();
        `}
      </Script>
    </>
  );
}