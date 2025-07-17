"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Heart,
  Star,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Rocket,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
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

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "H��c viên đã đào tạo",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Dự án thành công",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "98%",
      label: "Tỷ lệ hài lòng",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "5+",
      label: "Năm kinh nghiệm",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Sứ mệnh",
      description:
        "Đào tạo và phát triển nhân lực chất lượng cao thông qua phương pháp Mentoring kết hợp Coaching, giúp các cá nhân và tổ chức đạt được mục tiêu bền vững.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Tầm nhìn",
      description:
        "Trở thành trung tâm đào tạo Mentoring & Coaching hàng đầu Việt Nam, góp phần xây dựng một thế hệ lãnh đạo tương lai có năng lực và tâm huyết.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Giá trị cốt lõi",
      description:
        "Chất lượng - Cam kết - Sáng tạo - Bền vững. Chúng tôi đặt người học làm trung tâm và cam kết mang lại giá trị thực tế cho mọi học viên.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Thành lập MSC",
      description:
        "Ra đời với tầm nhìn trở thành trung tâm Mentoring & Coaching đầu tiên tại Việt Nam",
    },
    {
      year: "2020",
      title: "Phát triển đội ngũ",
      description:
        "Xây dựng ban giảng huấn chuyên nghiệp với các chuyên gia hàng đầu",
    },
    {
      year: "2021",
      title: "Mở rộng hoạt động",
      description: "Triển khai các dự án đào tạo quy mô lớn cho doanh nghiệp",
    },
    {
      year: "2022",
      title: "Đạt cột mốc quan trọng",
      description: "Đào tạo thành công 300+ học viên và 10+ dự án lớn",
    },
    {
      year: "2023",
      title: "Mở rộng quốc tế",
      description:
        "Kết nối với các tổ chức giáo dục quốc tế, mở rộng tầm ảnh hưởng",
    },
    {
      year: "2024",
      title: "Đổi mới công nghệ",
      description:
        "Ứng dụng công nghệ AI và digital transformation trong đào tạo",
    },
  ];

  const achievements = [
    "Trung tâm Mentoring & Coaching đầu tiên tại Việt Nam",
    "Đào tạo thành công 500+ học viên xuất sắc",
    "Triển khai 15+ dự án thành công cho doanh nghiệp",
    "Đội ngũ giảng viên có trình độ cao và kinh nghiệm thực tiễn",
    "Phương pháp đào tạo độc quyền kết hợp Mentoring & Coaching",
    "Tỷ lệ học viên có việc làm sau khóa học đạt 95%",
    "Được tin tưởng bởi nhiều doanh nghiệp lớn",
    "Góp phần phát triển nguồn nhân lực chất lượng cao cho xã hội",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                🏢 Về chúng tôi
              </span>
              <h1 className="text-responsive-3xl font-bold text-gradient mb-6">
                MSC - Trung tâm Mentoring kết hợp Coaching
              </h1>
              <p className="text-responsive-lg text-gray-600 mb-8 leading-relaxed">
                Đầu tiên tại Việt Nam, chúng tôi mang đến phương pháp đào tạo
                độc đáo kết hợp Mentoring và Coaching, giúp học viên và dự án
                phát triển bền vững.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
            animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {stat.icon}
                </div>
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-2xl font-bold text-gradient mb-6">
              Sứ mệnh - Tầm nhìn - Giá trị
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto">
              Những giá trị cốt lõi định hướng mọi hoạt động của MSC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center group" hover="lift">
                  <CardHeader>
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-2xl font-bold text-gradient mb-6">
              Hành trình phát triển
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-2xl mx-auto">
              Từ những ngày đầu thành lập đến hôm nay, MSC không ngừng phát
              triển và đổi mới
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}
                  >
                    <Card className="group" hover="lift">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold">
                            {item.year}
                          </span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-responsive-2xl font-bold text-gradient mb-6">
              Thành tựu nổi bật
            </h2>
            <p className="text-responsive-base text-gray-600 max-w-2xl mx-auto">
              Những cột mốc quan trọng khẳng định vị thế của MSC trong lĩnh vực
              đào tạo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-responsive-2xl font-bold mb-6">
              Cùng MSC khởi đầu hành trình phát triển của bạn
            </h2>
            <p className="text-responsive-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Tham gia các khóa đào tạo chuyên nghiệp và trở thành phiên bản tốt
              nhất của chính mình
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                rightIcon={<ArrowRight size={20} />}
              >
                Khám phá khóa học
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                rightIcon={<BookOpen size={20} />}
              >
                Tải brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Eye icon component (since it's not in lucide-react by default)
const Eye = ({ className, ...props }: any) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
