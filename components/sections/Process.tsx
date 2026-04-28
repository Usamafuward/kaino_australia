"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiTarget,
  FiFileText,
  FiUsers,
  FiCompass,
  FiPlay,
  FiSettings,
  FiHeart,
} from "react-icons/fi";

const processSteps = [
  {
    number: 1,
    title: "Discovery Session",
    description:
      "Explore your business needs, challenges, and goals while sharing our capabilities and ensuring alignment in values and vision. Every engagement begins with a strategic assessment to confirm we can seamlessly integrate with your business and accelerate growth.",
    icon: FiSearch,
  },
  {
    number: 2,
    title: "Scope Workshop",
    description:
      "Collaboratively define the project scope, priorities, and success criteria to ensure clarity and shared ownership from the start.",
    icon: FiTarget,
  },
  {
    number: 3,
    title: "Proposal & Presentation",
    description:
      "We translate insights into a tailored roadmap, presenting a clear plan, timelines, commercials, and expected outcomes to guide decision-making.",
    icon: FiFileText,
  },
  {
    number: 4,
    title: "Establishing a Unified Team",
    description:
      "Assemble a dedicated, cross-functional team that works seamlessly with your business, ensuring strategy and execution are fully aligned.",
    icon: FiUsers,
  },
  {
    number: 5,
    title: "Strategy Development",
    description:
      "Craft a clear, data-led strategy that guides marketing, technology, and AI initiatives, ensuring every action supports measurable business goals.",
    icon: FiCompass,
  },
  {
    number: 6,
    title: "Kick-Off",
    description:
      "Launch the project with full alignment across teams, establishing communication channels, milestones, and expectations for seamless collaboration.",
    icon: FiPlay,
  },
  {
    number: 7,
    title: "Execution & Ongoing Work",
    description:
      "Deliver campaigns, software, and AI/data solutions with precision, continuously monitoring and optimising performance using real-time insights.",
    icon: FiSettings,
  },
  {
    number: 8,
    title: "Client Service & Continuous Improvement",
    description:
      "Maintain proactive account management, regular check-ins, and transparent reporting to ensure sustainable, long-term results.",
    icon: FiHeart,
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % processSteps.length);
  }, []);

  const prevStep = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + processSteps.length) % processSteps.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  const activeStep = processSteps[activeIndex];

  return (
    <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20" id="process">
      {/* Grid Pattern */}
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
            className="inline-flex items-center bg-linear-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 mb-4 sm:mb-5 md:mb-6"
            style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          >
            <FiCompass
              className="mr-2 text-xs sm:text-sm md:text-base"
              style={{ color: "#10064C" }}
            />
            <span
              className="text-xs sm:text-sm md:text-base font-medium"
              style={{ color: "#10064C" }}
            >
              How We Work
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            We partner with your business to deliver integrated, data-led
            solutions. Every project is guided by strategy, supported by a
            dedicated account manager, and executed by a unified team focused on{" "}
            <span className="font-semibold" style={{ color: "#10064C" }}>
              measurable outcomes
            </span>
            .
          </p>
        </motion.div>

        {/* Step Indicators */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <motion.button
              key={step.number}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 ${
                index === activeIndex
                  ? "text-white shadow-lg"
                  : index < activeIndex
                  ? "bg-blue-100 text-blue-600 border border-blue-200"
                  : "bg-white/60 text-gray-400 border border-white/50"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full"
                  layoutId="activeStep"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{step.number}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Step Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md sm:shadow-lg overflow-hidden relative">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
              <motion.div
                className="h-full bg-[#FF8600] hover:bg-[#FF8600]/90"
                key={`progress-${activeIndex}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl">
                    <activeStep.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                      Step {activeStep.number} of {processSteps.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {activeStep.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {activeStep.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-6 sm:mt-8">
              <motion.button
                onClick={() => {
                  prevStep();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 8000);
                }}
                className="flex items-center gap-2 text-sm sm:text-base text-gray-500 hover:text-gray-800 transition-colors"
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Previous
              </motion.button>
              <motion.button
                onClick={() => {
                  nextStep();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className="flex items-center gap-2 text-sm sm:text-base text-gray-500 hover:text-gray-800 transition-colors"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
