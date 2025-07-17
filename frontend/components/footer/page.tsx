'use client';

import { Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 dark:bg-black dark:text-gray-200 border-t border-gray-200 dark:border-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Address */}
        <div>
          <h2 className="text-xl font-bold mb-4">MSC</h2>
          <p>279 Nguyễn Tri Phương, Quận 10, TP.Hồ Chí Minh</p>
          <p className="mt-2">Điện thoại: (+84) 329 381 489</p>
          <p>Email: <a href="mailto:msc.edu.vn@gmail.com" className="underline">msc.edu.vn@gmail.com</a></p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Liên kết</h3>
          <ul className="space-y-2">
            <li><a href="/gioi-thieu" className="hover:underline">Giới thiệu</a></li>
            <li><a href="/lien-he" className="hover:underline">Liên hệ</a></li>
            <li><a href="/chinh-sach" className="hover:underline">Chính sách</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Đăng ký nhận tin</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email của bạn"
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:opacity-80 transition"
            >
              Đăng ký
            </button>
          </form>
        </div>

        {/* Social + Copyright */}
        <div>
          <h3 className="font-semibold mb-4">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube />
            </a>
          </div>
          <p className="text-sm">
            © 2025 MSC Center. Phát triển bởi Phòng Công nghệ Thông tin.
          </p>
        </div>
      </div>
    </footer>
  );
}
