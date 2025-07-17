"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Home,
  User,
  BookOpen,
  FolderOpen,
  Users,
  Award,
  Handshake,
  Share2,
  Mail,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  language: "vi" | "en";
  setLanguage: (lang: "vi" | "en") => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = {
    vi: [
      { href: "/", label: "TRANG CHỦ", icon: Home },
      { href: "/about", label: "GIỚI THIỆU", icon: User },
      { href: "/training", label: "ĐÀO TẠO", icon: BookOpen },
      { href: "/projects", label: "DỰ ÁN", icon: FolderOpen },
      { href: "/mentors", label: "MENTORS", icon: Users },
      { href: "/mscers", label: "MSCer", icon: Award },
      { href: "/partnership", label: "ĐỒNG HÀNH", icon: Handshake },
      { href: "/blog", label: "CHIA SẺ", icon: Share2 },
      { href: "/contact", label: "LIÊN HỆ", icon: Mail },
    ],
    en: [
      { href: "/", label: "HOME", icon: Home },
      { href: "/about", label: "ABOUT", icon: User },
      { href: "/training", label: "TRAINING", icon: BookOpen },
      { href: "/projects", label: "PROJECTS", icon: FolderOpen },
      { href: "/mentors", label: "MENTORS", icon: Users },
      { href: "/mscers", label: "MSCer", icon: Award },
      { href: "/partnership", label: "PARTNERSHIP", icon: Handshake },
      { href: "/blog", label: "SHARING", icon: Share2 },
      { href: "/contact", label: "CONTACT", icon: Mail },
    ],
  };

  const authButtons = {
    vi: [
      { href: "/login", label: "Đăng Nhập", icon: LogIn },
      { href: "/register", label: "Đăng Ký", icon: UserPlus },
    ],
    en: [
      { href: "/login", label: "Login", icon: LogIn },
      { href: "/register", label: "Register", icon: UserPlus },
    ],
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-lg">M</span>
              </motion.div>
              <span className="text-xl font-bold text-gradient">MSC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems[language].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50",
                    )}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Language & Auth */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30">
                <button
                  onClick={() => setLanguage("vi")}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
                    language === "vi"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-600",
                  )}
                >
                  <span>🇻🇳</span>
                  <span>VI</span>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
                    language === "en"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-600",
                  )}
                >
                  <span>🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>

              {/* Auth Buttons - Desktop */}
              <div className="hidden md:flex items-center space-x-2">
                {authButtons[language].map((button) => {
                  const Icon = button.icon;
                  return (
                    <Link key={button.href} href={button.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      >
                        <Icon size={16} />
                        {button.label}
                      </Button>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems[language].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50",
                      )}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}

                {/* Mobile Auth Buttons */}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  {authButtons[language].map((button) => {
                    const Icon = button.icon;
                    return (
                      <Link
                        key={button.href}
                        href={button.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                      >
                        <Icon size={18} />
                        <span>{button.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
