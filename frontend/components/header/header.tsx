//frontend/components/header/header.tsx
'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: 'GIỚi THIỆU', href: '/' },
  { label: 'ĐÀO TẠO', href: '/dao-tao' },
  { label: 'DỰ ÁN', href: '/du-an' },
  { label: 'MENTORS', href: '/mentors' },
  { label: 'MSCer', href: '/mscer' },
  { label: 'ĐỒNG HÀNH', href: '/dong-hanh' },
  { label: 'CHIA SẺ', href: '/chia-se' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const isLoggedIn = false; // Placeholder for auth

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-neutral-900 shadow-sm transition-colors">
      {/* Topbar */}
      <div className="flex justify-end items-center gap-4 text-sm px-4 py-2 border-b dark:border-neutral-700">
        <div className="flex gap-2 items-center">
          <span className="cursor-pointer">🇻🇳</span>
          <span className="cursor-pointer">🇬🇧</span>
        </div>
        <div className="flex gap-2">
          {!isLoggedIn ? (
            <>
              <button className="hover:underline">Đăng Nhập</button>
              <button className="hover:underline">Đăng Ký</button>
              <button className="hover:underline">Hồ sơ năng lực</button>
            </>
          ) : (
            <button className="hover:underline">Tài khoản</button>
          )}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={clsx(
          'transition-all duration-300 flex justify-between items-center px-4 md:px-8 bg-white dark:bg-neutral-900',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="MSC Logo"
            width={scrolled ? 100 : 140}
            height={50}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-[15px] font-medium text-neutral-800 dark:text-neutral-100">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'hover:text-blue-600 dark:hover:text-blue-400 transition-colors',
                pathname === item.href && 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-700 dark:text-neutral-200"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-neutral-900 z-[999] flex flex-col px-6 py-6"
          >
            <div className="flex justify-between items-center mb-8">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
              <button onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium text-neutral-800 dark:text-neutral-100">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}