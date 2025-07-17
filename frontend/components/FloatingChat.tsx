"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Zap,
  Heart,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingChatProps {
  language: "vi" | "en";
}

export default function FloatingChat({ language }: FloatingChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mscData = {
    vi: {
      welcome:
        "Xin chào! 👋 Tôi là MSC AI Assistant. Tôi có thể giúp bạn tìm hiểu về MSC - Trung tâm Mentoring kết hợp Coaching. Bạn muốn biết điều gì?",
      about:
        "MSC là trung tâm Mentoring kết hợp Coaching đầu tiên ở Việt Nam, giúp học viên và dự án phát triển bền vững.",
      training:
        "MSC cung cấp các khóa đào tạo kỹ năng mềm, leadership, sales & marketing, và quản lý dự án.",
      mentors:
        "Ban giảng huấn MSC bao gồm: TS. Phan Huỳnh Anh, PGS. Hoàng Cửu Long, ThS. Đoàn Đức Minh và nhiều chuyên gia khác.",
      projects:
        "MSC đã triển khai 15+ dự án thành công như Nông Trại Hải Vân, Happy Land, Einstein School HCM, VNPT...",
      contact:
        "Liên hệ MSC: 📍 279 Nguyễn Tri Phương, Q.10, TP.HCM 📞 (+84) 329 381 489 ✉️ msc.edu.vn@gmail.com",
      mscers:
        "MSCers là những học viên xuất sắc đã trưởng thành từ MSC, hiện đang làm việc tại các vị trí quan trọng.",
      placeholder: "Hỏi tôi về MSC...",
      defaultResponse:
        "Tôi chỉ có thể trả lời về MSC. Bạn có thể hỏi về: đào tạo, mentors, dự án, MSCers, liên hệ, hoặc giới thiệu chung.",
    },
    en: {
      welcome:
        "Hello! 👋 I'm MSC AI Assistant. I can help you learn about MSC - The first Mentoring & Coaching center in Vietnam. What would you like to know?",
      about:
        "MSC is the first Mentoring & Coaching center in Vietnam, helping students and projects develop sustainably.",
      training:
        "MSC provides training courses in soft skills, leadership, sales & marketing, and project management.",
      mentors:
        "MSC faculty includes: Dr. Phan Huynh Anh, Assoc. Prof. Hoang Cuu Long, MSc. Doan Duc Minh and many other experts.",
      projects:
        "MSC has successfully implemented 15+ projects like Hai Van Farm, Happy Land, Einstein School HCM, VNPT...",
      contact:
        "Contact MSC: 📍 279 Nguyen Tri Phuong, Dist.10, HCMC 📞 (+84) 329 381 489 ✉️ msc.edu.vn@gmail.com",
      mscers:
        "MSCers are outstanding students who have grown from MSC, currently working in important positions.",
      placeholder: "Ask me about MSC...",
      defaultResponse:
        "I can only answer about MSC. You can ask about: training, mentors, projects, MSCers, contact, or general introduction.",
    },
  };

  const botResponses = {
    vi: {
      greetings: ["xin chào", "chào", "hello", "hi"],
      about: ["giới thiệu", "msc là gì", "về msc", "msc", "trung tâm"],
      training: ["đào tạo", "khóa học", "học", "training", "course"],
      mentors: ["mentor", "giảng viên", "thầy", "cô", "giảng huấn"],
      projects: ["dự án", "project", "triển khai"],
      contact: ["liên hệ", "địa chỉ", "phone", "email", "contact"],
      mscers: ["mscer", "học viên", "student", "member"],
      partnership: ["đồng hành", "hợp tác", "partner", "partnership"],
    },
    en: {
      greetings: ["hello", "hi", "hey", "greeting"],
      about: ["about", "what is msc", "introduce", "msc", "center"],
      training: ["training", "course", "learn", "education"],
      mentors: ["mentor", "teacher", "instructor", "faculty"],
      projects: ["project", "implementation", "work"],
      contact: ["contact", "address", "phone", "email"],
      mscers: ["mscer", "student", "member", "graduate"],
      partnership: ["partnership", "cooperation", "partner"],
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    const responses = botResponses[language];
    const data = mscData[language];

    // Greetings
    if (responses.greetings.some((keyword) => input.includes(keyword))) {
      return data.welcome;
    }

    // About MSC
    if (responses.about.some((keyword) => input.includes(keyword))) {
      return data.about;
    }

    // Training
    if (responses.training.some((keyword) => input.includes(keyword))) {
      return data.training;
    }

    // Mentors
    if (responses.mentors.some((keyword) => input.includes(keyword))) {
      return data.mentors;
    }

    // Projects
    if (responses.projects.some((keyword) => input.includes(keyword))) {
      return data.projects;
    }

    // Contact
    if (responses.contact.some((keyword) => input.includes(keyword))) {
      return data.contact;
    }

    // MSCers
    if (responses.mscers.some((keyword) => input.includes(keyword))) {
      return data.mscers;
    }

    // Default response
    return data.defaultResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = getBotResponse(inputValue);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          isBot: true,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: "welcome",
        text: mscData[language].welcome,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  const quickQuestions = {
    vi: [
      "MSC là gì?",
      "Các khóa đào tạo",
      "Danh sách mentors",
      "Dự án đã triển khai",
      "Thông tin liên hệ",
    ],
    en: [
      "What is MSC?",
      "Training courses",
      "List of mentors",
      "Completed projects",
      "Contact information",
    ],
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", bounce: 0.6 }}
      >
        <Button
          onClick={handleOpen}
          className={cn(
            "relative w-14 h-14 rounded-full shadow-2xl",
            isOpen ? "hidden" : "flex",
          )}
          variant="gradient"
        >
          <MessageCircle size={24} />

          {/* Floating indicators */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">MSC AI Assistant</h3>
                  <p className="text-xs opacity-75">
                    {language === "vi"
                      ? "Trợ lý thông minh"
                      : "Smart Assistant"}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon-sm"
                className="text-white hover:bg-white/20"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex items-start space-x-2",
                    message.isBot ? "justify-start" : "justify-end",
                  )}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}

                  <div
                    className={cn(
                      "max-w-[80%] px-3 py-2 rounded-2xl text-sm",
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                    )}
                  >
                    {message.text}
                  </div>

                  {!message.isBot && (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={12} className="text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">
                  {language === "vi" ? "Câu hỏi gợi ý:" : "Quick questions:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions[language].map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputValue(question);
                        handleSendMessage();
                      }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={mscData[language].placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  variant="gradient"
                  size="icon"
                  className="flex-shrink-0"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
