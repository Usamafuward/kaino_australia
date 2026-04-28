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
import Image from "next/image";
import business_inteligence from "@/public/assets/photos/business_intelligence.png";

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

export default function BusinessIntelligencePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    stage: "",
    budget: "",
    requirements: ["Business Intelligence"],
    message: "",
    subscribe: false,
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: { target: { name: any; checked: any; }; }) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const toggleRequirement = (req: string) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter((r: any) => r !== req)
        : [...prev.requirements, req],
    }));
  };

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.consent) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        to_name: "Kainovation Team",
        to_email: "hello@kainovation.com",
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
        requirements: ["Business Intelligence"],
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
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[80vh] bg-brand-deep text-white flex justify-center items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
              variants={itemVariants}
            >
              <FiTrendingUp className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Service Overview
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Transform raw data into actionable insights with cutting-edge visualization and analytics platforms. We create powerful dashboards that reveal hidden patterns and drive strategic decisions.
            </motion.p>
            <motion.button
              className="group relative bg-linear-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('request-proposal')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Discover
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SERVICE OVERVIEW/INCLUSIONS */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-800">
                What&apos;s Included
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our approach to Business Intelligence provides comprehensive solutions tailored to scale your operations and drive results. Here are the core focus areas:
              </p>
              <ul className="space-y-4">
                
                  <motion.li
                    key={0}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">Azure Synapse Analytics</span>
                  </motion.li>
                  <motion.li
                    key={1}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">Power BI Dashboards</span>
                  </motion.li>
                  <motion.li
                    key={2}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2 * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">Real-time Reporting</span>
                  </motion.li>
                  <motion.li
                    key={3}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 3 * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                      <FiCheck className="text-white" />
                    </div>
                    <span className="font-semibold text-slate-700">Custom Visualizations</span>
                  </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-lg mx-auto w-full"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="absolute inset-4 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={business_inteligence}
                  alt="Business Intelligence"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECTS / EXAMPLES */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-800">
              Projects & Examples
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover how our Business Intelligence services have transformed businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-slate-50 border border-gray-100 rounded-2xl p-8 aspect-4/3 flex items-center justify-center shadow-sm"
                >
                  <p className="text-gray-400 font-semibold uppercase tracking-widest">
                    Coming Soon
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA FORM */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-24" id="request-proposal">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight">
              <span className="text-slate-800">REQUEST A</span>
              <br />
              <span className="bg-linear-to-r from-[#10064C] to-[#3B82F6] bg-clip-text text-transparent">
                PROPOSAL.
              </span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-4xl bg-linear-to-r from-[#3B82F6] via-[#A855F7] to-[#EC4899] rounded-full" />
          </motion.div>

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
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
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
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="WORK EMAIL *"
                required
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
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
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  STAGE OF LIFE *
                </h4>
                <div className="space-y-3">
                  {stageOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.stage === option ? "border-blue-500 bg-brand-blue" : "border-gray-300 group-hover:border-gray-400"}`}>
                        {formData.stage === option && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <input type="radio" name="stage" value={option} checked={formData.stage === option} onChange={handleInputChange} className="hidden" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  ANNUAL MARKETING BUDGET *
                </h4>
                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.budget === option ? "border-blue-500 bg-brand-blue" : "border-gray-300 group-hover:border-gray-400"}`}>
                        {formData.budget === option && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <input type="radio" name="budget" value={option} checked={formData.budget === option} onChange={handleInputChange} className="hidden" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-gray-200 pl-6">
                <h4 className="font-bold text-sm tracking-widest text-gray-800 mb-4">
                  REQUIREMENTS *
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {requirementOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 ${formData.requirements.includes(option) ? "border-blue-500 bg-brand-blue" : "border-gray-300 group-hover:border-gray-400"}`}>
                        {formData.requirements.includes(option) && <FiCheck className="w-3 h-3 text-white" />}
                      </div>
                      <input type="checkbox" checked={formData.requirements.includes(option)} onChange={() => toggleRequirement(option)} className="hidden" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-800 uppercase tracking-wider">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="TELL US ABOUT YOUR BUSINESS *"
                rows={4}
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-4 text-sm sm:text-base font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-semibold placeholder:tracking-widest transition-colors bg-transparent resize-none"
              />
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5 ${formData.subscribe ? "border-blue-500 bg-brand-blue" : "border-gray-300 group-hover:border-gray-400"}`}>
                  {formData.subscribe && <FiCheck className="w-3 h-3 text-white" />}
                </div>
                <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleCheckboxChange} className="hidden" />
                <span className="text-sm text-gray-600">Subscribe to our email list for insights, updates, and industry news.</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 mt-0.5 ${formData.consent ? "border-blue-500 bg-brand-blue" : "border-gray-300 group-hover:border-gray-400"}`}>
                  {formData.consent && <FiCheck className="w-3 h-3 text-white" />}
                </div>
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleCheckboxChange} className="hidden" required />
                <span className="text-sm text-gray-600">I consent to the <a href="/privacy" className="text-brand-deep underline hover:text-brand-deep">Privacy Policy</a> and <a href="/terms" className="text-brand-deep underline hover:text-brand-deep">Terms & Conditions</a>. *</span>
              </label>
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`group relative font-bold py-4 px-10 sm:px-14 rounded-full overflow-hidden shadow-xl text-base sm:text-lg transition-all ${isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-linear-to-r from-[#10064C] to-[#3B82F6] text-white hover:shadow-2xl"}`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
                {!isSubmitting && <div className="absolute inset-0 bg-linear-to-r bg-[#FF8600] opacity-0 group-hover:opacity-100 transition-opacity" />}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div className="mt-6 flex items-center gap-3 text-green-600 bg-green-50 border border-green-200 rounded-xl px-6 py-4 max-w-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <FiCheck className="text-xl shrink-0" />
                  <p className="text-sm font-medium">Thank you! Your proposal request has been submitted. We&apos;ll be in touch shortly.</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div className="mt-6 flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-xl px-6 py-4 max-w-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <FiAlertCircle className="text-xl shrink-0" />
                  <p className="text-sm font-medium">Please fill in all required fields and accept the Terms & Conditions.</p>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
