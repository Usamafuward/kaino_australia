"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiArrowRight,
  FiDatabase,
  FiCpu,
  FiBarChart2,
  FiCompass,
  FiLayers,
  FiZap,
  FiTrendingUp,
  FiCode,
  FiUsers,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { StaticImageData } from "next/image";
import marketing_and_brand from "@/public/assets/photos/marketing_and_brand.png";
import business_inteligence from "@/public/assets/photos/business_intelligence.png";
import data_engineering from "@/public/assets/photos/data_engineering.png";
import machine_learning from "@/public/assets/photos/machine_learning.png";
import software_engineering from "@/public/assets/photos/software_engineering.png";
import resource_augmentation from "@/public/assets/photos/resource_augmentation.png";
import fairfirst from "@/public/assets/fairfirst.png";
import healthhelper from "@/public/assets/healthhelper.png";
import ServiceCard from "@/components/cards/ServiceCard";
import ClientLogoCard from "@/components/cards/ClientLogoCard";
import TestimonialCard from "@/components/cards/TestimonialCard";

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  image: StaticImageData;
  id: string;
  ctaText: string;
}

interface Testimonial {
  quote: string;
  client: {
    name: string;
    title: string;
    company: string;
  };
  keywords: string[];
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We use Nexus Co as a recruiting resource as we prefer that all of our products are developed inhouse. They are able to find strong candidates quickly. We've been happy with the skill level of the people we hired through them. The Nexus Co team also takes care of all of the HR related processes so that all we have to worry about is the actual work. Their rates are reasonable as well.",
    client: {
      name: "Vlad Lipunov",
      title: "Cofounder - CTO",
      company: "HealthHelper",
    },
    keywords: ["strong candidates", "skill level", "HR related processes"],
    image: healthhelper,
  },
  {
    quote:
      "Took us 2-weeks every month to generate/collate manual reports, delaying crucial decisions. Nexus Co developed real-time, web-based reports on IBM Cognos using our consolidated ODS (Operational Data Store). Thanks to them we are more efficient, profitable, and our customers are happier.",
    client: {
      name: "Clement Fernandopulle",
      title: "Fairfirst Insurance - CTO",
      company: "Fairfax Financial Holdings Limited",
    },
    keywords: ["real-time, web-based reports", "Operational Data Store", "ODS", "efficient", "profitable"],
    image: fairfirst,
  },
];

export const servicesData: Service[] = [
  {
    title: "Software Development",
    description:
      "Build scalable, secure, and high-performance applications that support your marketing and business goals. Our solutions integrate seamlessly with your systems, powering smarter campaigns, customer experiences, and digital innovation.",
    icon: FiCode,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "Full-Stack Development",
      "API Integrations",
      "Cloud-Native Applications",
      "DevOps Automation",
    ],
    image: software_engineering,
    id: "software-engineering",
    ctaText: "Lets dive in",
  },
  {
    title: "Marketing & Brand",
    description:
      "We embed ourselves as a unified team, aligning marketing, brand, and technology to execute seamlessly. Driven by strategic insight, every effort works in sync to maximise impact.",
    icon: FiTrendingUp,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "Marketing & Brand Strategy",
      "Website Experience & SEO",
      "Content & Storytelling",
      "Sales Activation",
    ],
    image: marketing_and_brand,
    id: "marketing-brand",
    ctaText: "Show me how",
  },
  {
    title: "Data Architecture & Engineering",
    description:
      "Design, build, and optimise scalable data systems that turn raw information into actionable insights. From legacy platforms to modern cloud solutions, we create a reliable infrastructure that powers smarter decisions, drives efficiency, and supports growth across your business.",
    icon: FiDatabase,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "ETL/ELT Pipelines",
      "Cloud Data Lakes",
      "Stream Processing",
      "Data Warehousing",
    ],
    image: data_engineering,
    id: "data-engineering",
    ctaText: "Break it down",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness intelligent systems to optimise business processes, predict trends, and automate smarter decisions across marketing, operations, and strategy. Our solutions turn data into actionable insights that drive growth, efficiency, and measurable results.",
    icon: FiCpu,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "Predictive Analytics",
      "Neural Networks",
      "Computer Vision",
      "NLP Solutions",
    ],
    image: machine_learning,
    id: "machine-learning",
    ctaText: "Tell me more",
  },
  {
    title: "Resource Augmentation",
    description:
      "Scale your team with our expert developers and data scientists. We provide skilled professionals who integrate seamlessly into your projects, ensuring rapid delivery and high quality.",
    icon: FiUsers,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "On-Demand Talent",
      "Flexible Engagement Models",
      "Domain Expertise",
      "Rapid Onboarding",
    ],
    image: resource_augmentation,
    id: "resource-augmentation",
    ctaText: "Lets explore",
  },
  {
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights with cutting-edge visualization and analytics platforms. We create powerful dashboards that reveal hidden patterns and drive strategic decisions.",
    icon: FiTrendingUp,
    gradient: "from-brand-blue to-brand-deep",
    features: [
      "Azure Synapse Analytics",
      "Power BI Dashboards",
      "Real-time Reporting",
      "Custom Visualizations",
    ],
    image: business_inteligence,
    id: "business-intelligence",
    ctaText: "Discover",
  },
];

const EMAILJS_SERVICE_ID = "service_4puy5bi";
const EMAILJS_TEMPLATE_ID = "template_xxpj94a";
const EMAILJS_PUBLIC_KEY = "RU_ZRy4irYfFW48qV";

const requirementOptions = [
  "Software Development",
  "Marketing & Brand Strategy",
  "Website Experience & SEO",
  "Content & Storytelling",
  "Sales Activation",
  "Data Architecture & Engineering",
  "AI & Machine Learning",
  "Business Intelligence",
  "Resource Augmentation",
];

const stageOptions = ["Startup", "Established", "Listed"];

const budgetOptions = [
  "Not sure",
  "< $100K",
  "$100K - $500K",
  "$500K - $1Mil",
  "$1Mil +",
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    stage: "",
    budget: "",
    requirements: [] as string[],
    message: "",
    subscribe: false,
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const toggleRequirement = (req: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter((r) => r !== req)
        : [...prev.requirements, req],
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.consent) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        to_name: "Nexus Co Team",
        to_email: "hello@nexusco.com",
        from_name: formData.name,
        subject: "New Proposal Request - Services Page",
        client_name: formData.name,
        client_email: formData.email,
        client_phone: formData.phone || "Not provided",
        client_company: formData.company,
        client_stage: formData.stage || "Not specified",
        client_budget: formData.budget || "Not specified",
        client_requirements: formData.requirements.join(", ") || "None selected",
        client_message: formData.message || "No message provided",
        client_subscribe: formData.subscribe ? "Yes" : "No",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        stage: "",
        budget: "",
        requirements: [],
        message: "",
        subscribe: false,
        consent: false,
      });
      setTimeout(() => setSubmitStatus("idle"), 8000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* 
        SECTION: PAGE HERO
      */}
      <section className="relative min-h-screen bg-brand-deep text-white flex justify-center items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10 pt-28 md:pt-32 pb-16">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiZap className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Comprehensive AI & Data Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-orange-200 to-slate-200 bg-clip-text text-transparent">
                Our
              </span>
              {" "}
              <span className="bg-linear-to-r from-brand-orange to-[#ffb84d] bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Bringing together marketing, brand strategy, and advanced technology solutions 
              in an end-to-end offering - transforming ideas into scalable, data-led solutions that 
              deliver stronger, more effective outcomes for our clients.
            </motion.p>

            {/* Service Categories */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10 justify-center"
              variants={itemVariants}
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiTrendingUp className="text-green-400 mr-2" />
                <span className="text-sm">Marketing & Brand</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiCode className="text-sky-400 mr-2" />
                <span className="text-sm">Software Development</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiCpu className="text-purple-400 mr-2" />
                <span className="text-sm">AI & Machine Learning</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <FiDatabase className="text-indigo-400 mr-2" />
                <span className="text-sm">Data Architecture & Engineering</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="group relative bg-brand-orange text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-brand-orange/50"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Explore Our Solutions
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/*
        SECTION: END-TO-END APPROACH
      */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-flex items-center bg-linear-to-r from-brand-blue/20 to-brand-deep/20  backdrop-blur-sm border border-brand-blue/30 30 rounded-full px-6 py-2 mb-6">
              <FiLayers className="mr-2" style={{ color: "#10064C" }} />
              <span className="text-sm font-medium" style={{ color: "#10064C" }}>
                Our Approach
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                End-to-end solutions
              </span>
              <br />
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                that work
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              It&apos;s not just what gets done &mdash; it&apos;s the order it&apos;s done in.
              Our structured approach ensures every stage builds on the last,
              driving stronger outcomes from day one.
            </p>
          </motion.div>

          {/* The Problem vs Our Approach */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The Problem */}
            <div className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                  <FiAlertCircle className="text-white text-lg sm:text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-800">
                  The Problem
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  "Strategy skipped in favour of speed",
                  "Brand developed after execution has started",
                  "Marketing launched without clear direction or strategy",
                  "Technology built without the right foundations",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-slate-800 rounded-xl">
                <p className="text-sm sm:text-base text-white font-semibold">
                  The result: wasted budget, delays, and underperformance.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-linear-to-br from-[#10064C] to-brand-deep rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[2rem_2rem]" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                    <FiCheck className="text-white text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">
                    Our Approach
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-brand-light leading-relaxed mb-6">
                  We follow a structured, end-to-end process that ensures every
                  decision is aligned, intentional, and built for scale.
                </p>
                <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <p className="text-sm sm:text-base font-semibold text-brand-light">
                    The long-term outcome &mdash; a system to scale, better results,
                    and overall cost efficiencies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5 Key Steps */}
          <motion.div
            className="mb-16 sm:mb-20 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10 sm:mb-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">
                <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                  5 key steps we believe in for almost every project!
                </span>
              </h3>
            </div>

            {/* Steps with connecting line */}
            <div className="relative">
              {/* Connecting line - hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-blue-100 via-blue-300 to-blue-100 transform -translate-y-1/2 z-0 rounded-full" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  {
                    step: 1,
                    title: "Strategy",
                    desc: "Define direction, audience and commercial goals. Have a plan to drive tactical executions.",
                    icon: FiCompass,
                  },
                  {
                    step: 2,
                    title: "Foundation",
                    desc: "Build brand, messaging and customer experience. Get the foundation right.",
                    icon: FiLayers,
                  },
                  {
                    step: 3,
                    title: "Data & Tech",
                    desc: "Enable the right systems and architecture for sustainable and scalable success.",
                    icon: FiDatabase,
                  },
                  {
                    step: 4,
                    title: "Execution",
                    desc: "Activate across platforms and channels. Leverage the right tools for maximum traction and visibility.",
                    icon: FiArrowRight,
                  },
                  {
                    step: 5,
                    title: "Optimisation",
                    desc: "Refine and scale based on performance.",
                    icon: FiBarChart2,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-brand-deep to-brand-orange rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold text-brand-deep mb-2">
                        STEP {item.step}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Our WHY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10 sm:mb-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">
                <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                  Our &ldquo;WHY&rdquo;
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                { label: "Faster time to market", icon: FiZap },
                { label: "Less rework", icon: FiCheck },
                { label: "Better use of budget", icon: FiTrendingUp },
                { label: "Stronger performance", icon: FiBarChart2 },
                { label: "Built to scale", icon: FiLayers },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="bg-linear-to-br from-[#10064C] to-brand-deep rounded-2xl p-5 sm:p-6 text-white text-center shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.05)_1px,transparent_1px)] bg-size-[1rem_1rem]" />
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-brand-light" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        SECTION: SERVICES PLACEHOLDER
      */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20" id="services">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-linear-to-r from-brand-blue/20 to-brand-deep/20  backdrop-blur-sm border border-brand-blue/30 30 rounded-full px-6 py-2 mb-6">
              <FiZap className="mr-2 text-base" style={{ color: "#10064C" }} />
              <span
                className="text-base font-medium"
                style={{ color: "#10064C" }}
              >
                Detailed Services
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                Our Complete
              </span>
              <br />
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
          </motion.div>

          {/* Placeholder for your services content */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.title}
                serviceId={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                features={service.features}
                image={service.image}
                index={index}
                ctaText={service.ctaText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION: CLIENTS
      */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[4rem_4rem] animate-pulse" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced badge */}
            <motion.div
              className="inline-flex items-center bg-linear-to-r from-brand-blue/20 to-brand-deep/20  backdrop-blur-sm border border-brand-blue/30 30 rounded-full px-6 py-3 mb-8"
            >
              <FiUsers className="mr-2 text-brand-deep" />
              <span className="text-sm font-medium text-brand-deep">
                Trusted Partnership Network
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                Trusted By
              </span>
              <br />
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to work with innovative companies across various
              industries, delivering exceptional results that drive business
              transformation.
            </p>
          </motion.div>

          {/*Client Logo Section */}
          <ClientLogoCard />

          {/* Enhanced Testimonial Section */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-5xl font-black">
                <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  keywords={testimonial.keywords}
                  client={testimonial.client}
                  image={testimonial.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: REQUEST A PROPOSAL CTA */}
      <section className="relative bg-white py-12 sm:py-16 md:py-24" id="request-proposal">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="text-slate-800">REQUEST A</span>
              <br />
              <span className="bg-linear-to-r from-brand-deep to-brand-orange bg-clip-text text-transparent">
                PROPOSAL.
              </span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-4xl bg-linear-to-r from-[#3B82F6] via-[#A855F7] to-[#EC4899] rounded-full" />
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleFormSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="NAME *"
                required
                className="w-full border-b-2 border-gray-200 focus:border-brand-orange outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="PHONE NUMBER *"
                required
                className="w-full border-b-2 border-gray-200 focus:border-brand-orange outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="WORK EMAIL *"
                required
                className="w-full border-b-2 border-gray-200 focus:border-brand-orange outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="BUSINESS NAME *"
                required
                className="w-full border-b-2 border-gray-200 focus:border-brand-orange outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
            </div>

            {/* Stage / Budget / Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {/* Stage of Life */}
              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  STAGE OF LIFE *
                </h4>
                <div className="space-y-3">
                  {stageOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          formData.stage === option
                            ? "border-brand-orange bg-brand-orange"
                            : "border-gray-300 group-hover:border-gray-400"
                        }`}
                      >
                        {formData.stage === option && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="stage"
                        value={option}
                        checked={formData.stage === option}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Annual Marketing Budget */}
              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  ANNUAL MARKETING BUDGET *
                </h4>
                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          formData.budget === option
                            ? "border-brand-orange bg-brand-orange"
                            : "border-gray-300 group-hover:border-gray-400"
                        }`}
                      >
                        {formData.budget === option && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  REQUIREMENTS *
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {requirementOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 ${
                          formData.requirements.includes(option)
                            ? "border-brand-orange bg-brand-orange"
                            : "border-gray-300 group-hover:border-gray-400"
                        }`}
                      >
                        {formData.requirements.includes(option) && (
                          <FiCheck className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.requirements.includes(option)}
                        onChange={() => toggleRequirement(option)}
                        className="hidden"
                      />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="pt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="TELL US ABOUT YOUR BUSINESS *"
                rows={4}
                className="w-full border-b-2 border-gray-200 focus:border-brand-orange outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent resize-none"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                    formData.subscribe
                      ? "border-brand-orange bg-brand-orange"
                      : "border-gray-300 group-hover:border-gray-400"
                  }`}
                >
                  {formData.subscribe && (
                    <FiCheck className="w-3 h-3 text-white" />
                  )}
                </div>
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <span className="text-sm text-gray-600">
                  Subscribe to our email list for insights, updates, and industry news.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                    formData.consent
                      ? "border-brand-orange bg-brand-orange"
                      : "border-gray-300 group-hover:border-gray-400"
                  }`}
                >
                  {formData.consent && (
                    <FiCheck className="w-3 h-3 text-white" />
                  )}
                </div>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className="hidden"
                  required
                />
                <span className="text-sm text-gray-600">
                  I consent to the{" "}
                  <a href="/privacy" className="text-brand-deep underline hover:text-brand-deep">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-brand-deep underline hover:text-brand-deep">
                    Terms & Conditions
                  </a>
                  . *
                </span>
              </label>
            </div>

            {/* Submit Button & Status */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`group relative font-bold py-4 px-10 sm:px-14 rounded-full overflow-hidden shadow-xl text-base sm:text-lg transition-all ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-linear-to-r from-brand-deep to-brand-orange text-white hover:shadow-2xl"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Proposal Request
                      <FiSend className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-linear-to-r bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  className="mt-6 flex items-center gap-3 text-green-600 bg-green-50 border border-green-200 rounded-xl px-6 py-4 max-w-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheck className="text-xl shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! Your proposal request has been submitted. We&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  className="mt-6 flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl px-6 py-4 max-w-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiAlertCircle className="text-xl shrink-0" />
                  <p className="text-sm font-medium">
                    Please fill in all required fields and accept the Terms & Conditions.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
