"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHeart, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Placeholder text for Paul's testimonial. We will update this section with the actual client love and feedback from Paul once it is available. The platform has been fantastic for our operations.",
    author: "Paul",
    role: "Client Partner",
    company: "Placeholder Company",
  },
  {
    id: 2,
    quote: "Nexus Co transformed our approach to data. Their expertise and dedication to our success have been truly remarkable. We couldn't be happier with the results and the seamless integration.",
    author: "Jane Doe",
    role: "Chief Technology Officer",
    company: "Tech Innovators",
  },
  {
    id: 3,
    quote: "Their strategic insights into AI and machine learning helped us uncover patterns in our data we never knew existed. A game-changing partnership that accelerated our growth trajectory.",
    author: "John Smith",
    role: "Director of Innovation",
    company: "Global Enterprises",
  }
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden" id="client-love">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-linear-to-r from-brand-blue/20 to-brand-deep/20  backdrop-blur-sm border border-brand-blue/30 30 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
            style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          >
            <FiHeart
              className="mr-2 text-xs sm:text-sm md:text-base"
              style={{ color: "#10064C" }}
            />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              Client Love
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
              What Our Partners Say
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            We measure our success by the success of our clients. Here is what they have to say about working with Nexus Co.
          </p>
        </motion.div>

        {/* Testimonial Banner */}
        <div className="relative w-full max-w-4xl mx-auto h-full space-y-6 sm:space-y-8 pt-8">
          <div className="relative z-10 min-h-[350px] sm:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col gap-6 sm:gap-8"
              >
                {/* Client Info Header (matches TestimonialCard) */}
                <motion.div
                  className="flex items-center justify-center mx-auto space-x-4 sm:space-x-6 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm w-fit max-w-full"
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "0 15px 30px -8px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 mr-4 sm:mr-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-br from-brand-blue to-brand-deep rounded-xl flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg border border-gray-200/50">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div className="flex space-x-0.5 sm:space-x-1 lg:hidden mt-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          <FiStar className="text-yellow-500 text-base sm:text-lg fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 text-center lg:text-left">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                      {testimonials[currentIndex].company}
                    </h4>
                    <p className="font-medium text-sm sm:text-base text-[#10064C]">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">- {testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="hidden lg:flex space-x-0.5 lg:space-x-1 ml-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <FiStar className="text-brand-orange text-base sm:text-lg fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Quote Card (matches TestimonialCard) */}
                <motion.div 
                  className="relative bg-linear-to-br from-white to-blue-50 backdrop-blur-sm border border-orange-100 rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-md sm:shadow-lg text-center lg:text-left"
                  whileHover={{ 
                    backgroundColor: "rgba(255,255,255,0.95)",
                    boxShadow: "0 20px 50px -15px rgba(125, 95, 255, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-10">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-brand-orange">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center lg:items-start">
                    <div className="text-brand-orange mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 opacity-70" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 pt-6">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-brand-deep hover:border-orange-200 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>

            <div className="flex gap-3 px-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-brand-blue w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-brand-deep hover:border-orange-200 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
