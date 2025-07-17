"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  FolderOpen,
  Award,
  Target,
  Handshake,
  Share2,
  Mail,
  Star,
  Sparkles,
  Github,
  Twitter,
  Instagram,
  PlayCircle,
  TrendingUp,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Navigation from "@/components/Navigation";
import FloatingChat from "@/components/FloatingChat";

export default function HomePage() {
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "vi" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const navigationCards = [
    {
      title: language === "vi" ? "Giới thiệu" : "About Us",
      description:
        language === "vi"
          ? "Tìm hiểu về MSC và hành trình phát triển"
          : "Learn about MSC and our development journey",
      icon: <Users className="w-8 h-8" />,
      href: "/about",
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      title: language === "vi" ? "Đào tạo" : "Training",
      description:
        language === "vi"
          ? "Khám phá các khóa học chất lượng cao"
          : "Explore high-quality training courses",
      icon: <BookOpen className="w-8 h-8" />,
      href: "/training",
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      title: language === "vi" ? "Dự án" : "Projects",
      description:
        language === "vi"
          ? "Portfolio các dự án thành công"
          : "Portfolio of successful projects",
      icon: <FolderOpen className="w-8 h-8" />,
      href: "/projects",
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
    },
    {
      title: "Mentors",
      description:
        language === "vi"
          ? "Đội ngũ giảng viên chuyên gia"
          : "Expert faculty team",
      icon: <Target className="w-8 h-8" />,
      href: "/mentors",
      color: "from-yellow-500 to-orange-500",
      delay: 0.3,
    },
    {
      title: "MSCers",
      description:
        language === "vi"
          ? "Cộng đồng học viên xuất sắc"
          : "Outstanding student community",
      icon: <Award className="w-8 h-8" />,
      href: "/mscers",
      color: "from-red-500 to-rose-500",
      delay: 0.4,
    },
    {
      title: language === "vi" ? "Đồng hành" : "Partnership",
      description:
        language === "vi"
          ? "Đối tác và cơ hội hợp tác"
          : "Partners and collaboration opportunities",
      icon: <Handshake className="w-8 h-8" />,
      href: "/partnership",
      color: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      title: language === "vi" ? "Chia sẻ" : "Blog",
      description:
        language === "vi"
          ? "Bài viết và kiến thức hữu ích"
          : "Useful articles and knowledge",
      icon: <Share2 className="w-8 h-8" />,
      href: "/blog",
      color: "from-teal-500 to-cyan-500",
      delay: 0.6,
    },
    {
      title: language === "vi" ? "Liên hệ" : "Contact",
      description:
        language === "vi"
          ? "Kết nối và hỗ trợ trực tiếp"
          : "Direct connection and support",
      icon: <Mail className="w-8 h-8" />,
      href: "/contact",
      color: "from-pink-500 to-rose-500",
      delay: 0.7,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: language === "vi" ? "Học viên đã đào tạo" : "Students Trained",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: language === "vi" ? "Dự án thành công" : "Successful Projects",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: language === "vi" ? "Tỷ lệ hài lòng" : "Satisfaction Rate",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "5+",
      label: language === "vi" ? "Năm kinh nghiệm" : "Years Experience",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation language={language} setLanguage={setLanguage} />

      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="fixed opacity-20 pointer-events-none z-0"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.id % 3 === 0 ? (
            <Star className="w-full h-full text-blue-400" fill="currentColor" />
          ) : element.id % 3 === 1 ? (
            <Sparkles
              className="w-full h-full text-purple-400"
              fill="currentColor"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full" />
          )}
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          {/* Logo/Brand */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl mb-8 shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                MSC
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-4xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
              {language === "vi" ? (
                <>
                  Trung tâm{" "}
                  <span className="text-gradient font-semibold">
                    Mentoring kết hợp Coaching
                  </span>{" "}
                  đầu tiên tại Việt Nam
                </>
              ) : (
                <>
                  The first{" "}
                  <span className="text-gradient font-semibold">
                    Mentoring & Coaching
                  </span>{" "}
                  center in Vietnam
                </>
              )}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === "vi"
                ? "Giúp học viên và dự án phát triển bền vững thông qua phương pháp đào tạo hiện đại"
                : "Helping students and projects develop sustainably through modern training methods"}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/about">
              <Button
                variant="gradient"
                size="xl"
                className="w-full sm:w-auto group"
                animation="bounce"
                leftIcon={<PlayCircle size={20} />}
                rightIcon={
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                }
              >
                {language === "vi" ? "Khám phá MSC" : "Explore MSC"}
              </Button>
            </Link>
            <Link href="/training">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm group"
                animation="bounce"
                leftIcon={<BookOpen size={20} />}
                rightIcon={
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                }
              >
                {language === "vi" ? "Xem khóa học" : "View Courses"}
              </Button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="flex items-center justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-500">
              {language === "vi" ? "Cuộn xuống" : "Scroll down"}
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              {language === "vi" ? "Khám phá MSC" : "Explore MSC"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "vi"
                ? "Tìm hiểu về các dịch vụ và chương trình đào tạo của chúng tôi"
                : "Learn about our services and training programs"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                viewport={{ once: true }}
              >
                <Link href={card.href}>
                  <Card
                    className="h-full group cursor-pointer border-white/30 backdrop-blur-xl bg-white/20"
                    hover="lift"
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} mb-4 mx-auto text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {card.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 mb-4">
                        {card.description}
                      </CardDescription>
                      <div className="flex items-center justify-center text-blue-600 group-hover:gap-3 transition-all duration-300">
                        <span className="text-sm font-medium">
                          {language === "vi" ? "Tìm hiểu thêm" : "Learn more"}
                        </span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gradient mb-2">
                MSC Center
              </h3>
              <p className="text-gray-600">
                {language === "vi"
                  ? "Trung tâm Mentoring kết hợp Coaching đầu tiên tại Việt Nam"
                  : "The first Mentoring & Coaching center in Vietnam"}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-500">
              © 2025 MSC Center.{" "}
              {language === "vi"
                ? "Bản quyền thuộc về MSC"
                : "All rights reserved"}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chat */}
      <FloatingChat language={language} />
    </div>
  );
}
