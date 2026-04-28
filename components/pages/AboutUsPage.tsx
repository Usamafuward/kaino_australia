"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FiLinkedin,
  FiArrowRight,
  FiUsers,
  FiTarget,
  FiCompass,
  FiBarChart2,
  FiHeart,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import all from "@/public/assets/persons/all.webp";
import shayen from "@/public/assets/persons/shayen.webp";
import pasindu from "@/public/assets/persons/pasindu.webp";
import thulith from "@/public/assets/persons/thulith.webp";
import biman from "@/public/assets/persons/biman.webp";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: StaticImageData | null;
  linkedinUrl: string;
  initials?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Kate Behar",
    title: "Co-Founder & CMO",
    bio: "",
    image: null,
    linkedinUrl: "#",
    initials: "KB",
  },
  {
    name: "Shayen Yatagama",
    title: "Co-Founder & Director",
    bio: "Shayen majored in Applied Statistics from the University of Colombo. He started off in the Software Industry as a Business Analyst and has led software teams in designing & re-engineering business process workflows for some leading banks. He has a passion for Data Analytics, Visualisation, Systems Design, and Data science applications and strives to create positive change with his can-do attitude!",
    image: shayen,
    linkedinUrl: "https://www.linkedin.com/in/shayen-yatagama/",
  },
  {
    name: "Pasindu Jayathilaka",
    title: "Co-Founder & Director",
    bio: "Pasindu is an entrepreneur who graduated from the University of Colombo and a CIMA(UK) passed finalist. Having worked as a Business Analyst and a Product Manager he has designed and developed BI solutions for several fortune 500 companies. Pasindu is passionate about Social and HR data analytics and has a proven track record of delivering BI and software solutions in multiple domains including Banking, HR, and E-Commerce. He is determined to help Sri Lanka become the world's IT powerhouse!",
    image: pasindu,
    linkedinUrl: "https://www.linkedin.com/in/pasindut/",
  },
  {
    name: "Thulith Edirisinghe",
    title: "Co-Founder & Director",
    bio: "Thulith is a Mechanical Engineer from Massachusetts Institute of Technology, USA and a UWC Atlantic college alumni. He has experience of working in five countries across four continents, in diverse industries such as AI, E-commerce, Education, Renewable energy, Agriculture and even Biotech. Thulith strives to leverage his diverse experience to help organisation integrate the power of Data and AI to solve challenging problems and adapt to industry 4.0",
    image: thulith,
    linkedinUrl: "https://www.linkedin.com/in/thulith-edirisinghe-46826988/",
  },
  {
    name: "Luke",
    title: "Chief Creative Officer",
    bio: "",
    image: null,
    linkedinUrl: "#",
    initials: "L",
  },
  {
    name: "Biman Kasun Wimalaratne",
    title: "Business Development Partner",
    bio: "Passionate in connecting technology to empower communities, create sustainable wealth and improve our experience of life. Trained, educated and worked in London and Sydney, and here to take great Sri Lankan products and services to the world. Telling a better tech-enabled story.",
    image: biman,
    linkedinUrl: "https://www.linkedin.com/in/biman-wimalaratne-bb3804b7/",
  },
];

const values = [
  {
    title: "Strategy-first",
    description:
      "Every initiative begins with a clear strategy. We align business goals with execution so that every action has purpose and direction.",
    icon: FiCompass,
    color: "blue",
  },
  {
    title: "Data-driven",
    description:
      "Decisions are backed by real insights, not assumptions. We use data to inform, measure, and continuously improve outcomes.",
    icon: FiBarChart2,
    color: "indigo",
  },
  {
    title: "Authentic",
    description:
      "We build genuine partnerships rooted in transparency, honesty, and shared ambition. No fluff, no false promises.",
    icon: FiHeart,
    color: "sky",
  },
  {
    title: "Relentless excellence",
    description:
      "Good enough isn't enough. We hold ourselves to the highest standard in everything we deliver, every time.",
    icon: FiAward,
    color: "violet",
  },
];

export default function AboutPage() {
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
      {/* SECTION: PAGE HERO */}
      <section className="relative min-h-screen bg-brand-deep text-white flex justify-center items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
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
              <FiBookOpen className="text-sky-400 mr-2" />
              <span className="text-sm font-medium text-sky-300">
                Our Story
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="bg-linear-to-r from-white via-blue-200 to-slate-200 bg-clip-text text-transparent">
                Built on the belief
              </span>
              <br />
              <span className="bg-linear-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                that better is possible
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-md sm:text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Connecting strategy, brand, and technology end to end
              to deliver outcomes that actually matter.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="group relative bg-brand-blue text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl shadow-brand-blue/"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document
                  .getElementById("our-story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10 flex items-center">
                Discover Our Story
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SECTION: OUR STORY */}
      <section
        className="relative bg-slate-50 py-12 sm:py-16 md:py-20"
        id="our-story"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
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
            {/* Badge */}
            <motion.div className="inline-flex items-center bg-linear-to-r from-brand-blue/ to-brand-deep/ backdrop-blur-sm border border-brand-blue/ rounded-full px-6 py-2 mb-6">
              <FiBookOpen className="mr-2 text-brand-deep" />
              <span className="text-sm font-medium text-brand-deep">
                How It Started
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-blue bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent z-10" />
              <Image
                src={all}
                alt="Kainovation Team"
                className="w-full h-auto object-cover"
                placeholder="blur"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div className="space-y-6" variants={itemVariants}>
                <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                  It started with a complex website build.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our CMO, Kate Behar, was leading the project when she was
                  introduced to Shayen &mdash; a technically-minded business owner
                  working at the forefront of AI and data. What began as a
                  collaboration quickly evolved into something more.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Over two years of working closely together, one thing became
                  clear: the real gap in the market wasn&apos;t just in marketing
                  or technology &mdash; it was in the space between them.
                </p>

                <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 space-y-3">
                  <p className="text-gray-700 font-medium">
                    Strategy was disconnected from execution.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Brand wasn&apos;t aligned with build.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Data wasn&apos;t driving decisions in a meaningful way.
                  </p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  So we set out to change that.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  And that&apos;s how{" "}
                  <span className="font-bold" style={{ color: "#10064C" }}>
                    Kainovation
                  </span>{" "}
                  began &mdash; built on the belief that better outcomes come from
                  connecting the dots, end to end.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: MISSION */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-flex items-center bg-linear-to-r from-brand-blue/ to-brand-deep/ backdrop-blur-sm border border-brand-blue/ rounded-full px-6 py-2 mb-6">
              <FiTarget className="mr-2 text-brand-deep" />
              <span className="text-sm font-medium text-brand-deep">
                Our Purpose
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-blue bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-linear-to-br from-brand-deep to-brand-blue rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-size-[2rem_2rem]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed">
                  To empower organisations with robust, end-to-end AI and data
                  solutions that drive real-world transformation and sustainable
                  growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: VALUES & BELIEFS */}
      <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-flex items-center bg-linear-to-r from-brand-blue/ to-brand-deep/ backdrop-blur-sm border border-brand-blue/ rounded-full px-6 py-2 mb-6">
              <FiHeart className="mr-2 text-brand-deep" />
              <span className="text-sm font-medium text-brand-deep">
                What We Stand For
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-blue bg-clip-text text-transparent">
                Values & Beliefs
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {values.map((value) => {
              const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
                blue: { bg: "bg-blue-100", icon: "text-brand-deep", border: "hover:border-blue-200" },
                indigo: { bg: "bg-indigo-100", icon: "text-brand-deep", border: "hover:border-indigo-200" },
                sky: { bg: "bg-sky-100", icon: "text-brand-blue", border: "hover:border-sky-200" },
                violet: { bg: "bg-violet-100", icon: "text-violet-600", border: "hover:border-violet-200" },
              };
              const colors = colorMap[value.color];
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100 ${colors.border} transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`${colors.icon} text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION: MEET THE TEAM */}
      <section id="team" className="relative bg-slate-50 py-12 sm:py-16 md:py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div className="inline-flex items-center bg-linear-to-r from-brand-blue/ to-brand-deep/ backdrop-blur-sm border border-brand-blue/ rounded-full px-6 py-3 mb-8">
              <FiUsers className="mr-2 text-brand-deep" />
              <span className="text-sm font-medium text-brand-deep">
                The People Behind Kainovation
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-linear-to-r from-brand-deep to-brand-blue bg-clip-text text-transparent">
                Meet the Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The leadership driving strategy, creativity, and technology across
              everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative bg-linear-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-blue/ to-brand-deep/ rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                  <div className="shrink-0 w-full sm:w-48">
                    {member.image ? (
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="rounded-xl object-cover w-full h-64 sm:h-auto shadow-lg aspect-4/5 transition-transform duration-500"
                          placeholder="blur"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ) : (
                      <div className="w-full h-64 sm:h-auto aspect-4/5 rounded-xl bg-linear-to-br from-brand-blue to-brand-deep flex items-center justify-center shadow-lg">
                        <span className="text-4xl sm:text-5xl font-black text-white/90">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-deep transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-brand-deep font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block mt-1">
                          {member.title}
                        </p>
                      </div>
                      {member.linkedinUrl !== "#" && (
                        <motion.a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                          className="text-brand-deep hover:text-brand-deep transition-colors duration-300 ml-4 bg-blue-50 p-2 rounded-full hover:bg-blue-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiLinkedin size={20} />
                        </motion.a>
                      )}
                    </div>

                    {member.bio && (
                      <div className="bg-linear-to-r from-slate-50 to-blue-50/50 rounded-lg p-4 border border-gray-100">
                        <p className="text-gray-600 text-base leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
