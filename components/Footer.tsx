'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiGithub, FiCheck, FiX } from 'react-icons/fi';

// Mock RiTwitterXFill since we can't import it
const RiTwitterXFill = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "What we do", href: "/services" },
    { name: "Our projects", href: "/our-projects" },
    { name: "About us", href: "/about-us" },
    { name: "Insights", href: "/insights" },
  ],
  contact: [
    { icon: FiPhone, text: "+94 77 787 2366", href: "tel:+94777872366" },
    { icon: FiMail, text: "hello@nexusco.com", href: "mailto:hello@nexusco.com" },
    { icon: FiMapPin, text: "26A, Rudra Mawatha, Wellawatte, 00600, Sri Lanka", href: "#" }
  ],
  social: [
    { icon: FiLinkedin, href: "https://www.linkedin.com/company/nexusco/", name: "LinkedIn" }
  ]
};

const serviceLinks = [
  { name: 'Software Development', href: '/services/software-engineering' },
  { name: 'Marketing & Brand', href: '/services/marketing-brand' },
  { name: 'Data Architecture & Engineering', href: '/services/data-engineering' },
  { name: 'AI & Machine Learning', href: '/services/machine-learning' },
  { name: 'Resource Augmentation', href: '/services/resource-augmentation' },
  { name: 'Business Intelligence', href: '/services/business-intelligence' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6
    }
  }
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email subscription
  const handleEmailSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if email is entered and valid
    if (!email || !email.trim()) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - replace with your actual subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success popup
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      // Clear email input
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-[#10064C] backdrop-blur-[20px]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-size-[2rem_2rem] sm:bg-size-[3rem_3rem] md:bg-size-[4rem_4rem]" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8 relative z-10">
          {/* Main Footer Content */}
          <motion.div
            className="py-8 sm:py-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
              {/* Company Info */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <motion.h2 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">
                  <span className="text-white">
                    Nexus
                  </span>
                  <span className="relative text-brand-orange">
                    {' '}Co
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-white to-brand-orange origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>
                </motion.h2>

                <p className="text-brand-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base pr-4">
                  We are a global technology company specializing in AI-powered
                  data solutions that deliver transformative insights and
                  operational excellence.
                </p>

                <div className="flex space-x-3 sm:space-x-4">
                  {footerLinks.social.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-brand-light hover:text-white hover:bg-linear-to-r hover:from-brand-orange hover:to-[#e67900] transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon size={16} className="sm:text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-3 mb-8">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={link.href}
                        className="text-brand-light hover:text-brand-orange transition-colors duration-300 flex items-center group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-orange rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Us */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Contact Us
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {footerLinks.contact.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={contact.href}
                        className="flex items-start space-x-2 sm:space-x-3 text-brand-light hover:text-brand-orange transition-colors duration-300 group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-5 h-5 sm:w-6 sm:h-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-linear-to-r group-hover:from-brand-orange group-hover:to-[#e67900] transition-all duration-300 shrink-0"
                          whileHover={{ scale: 1.1 }}
                        >
                          <contact.icon size={12} className="sm:text-sm" />
                        </motion.div>
                        <span className="flex-1 leading-relaxed">
                          {contact.text}
                        </span>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Services Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
                  Our Services
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {serviceLinks.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={service.href}
                        className="text-brand-light hover:text-brand-orange transition-colors duration-300 flex items-center group text-sm sm:text-base"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-orange rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Newsletter Section */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  Newsletter
                </h3>
                <p className="text-brand-light text-sm mb-4">
                  Get the latest AI and data insights directly in your inbox.
                </p>
                <form
                  onSubmit={handleEmailSubscription}
                  className="flex flex-col gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-blue/30 30 text-sm"
                    disabled={isLoading}
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-white font-bold py-2.5 px-4 rounded-lg shadow-md flex items-center justify-center text-sm bg-[#FF8600] hover:bg-[#FF8600]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Subscribe
                        <FiArrowRight className="ml-2" size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 py-5 sm:py-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="text-center md:text-left">
                <p className="text-brand-light text-xs sm:text-sm">
                  © 2025 Nexus Co. All Rights Reserved
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                <motion.a
                  href="/privacy-policy"
                  className="text-brand-light hover:text-brand-orange text-xs sm:text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Success Alert Popup - Now positioned outside footer with fixed positioning */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Success Icon */}
              <motion.div
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <FiCheck className="text-green-600 text-2xl" />
              </motion.div>

              {/* Success Message */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to our newsletter. You&apos;ll receive
                the latest insights on AI, data science, and business
                intelligence directly in your inbox.
              </p>

              {/* Newsletter Details */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-3 text-gray-700 text-sm mb-2">
                  <FiMail className="text-brand-deep" />
                  <span className="font-medium">
                    Welcome to Nexus Co Newsletter
                  </span>
                </div>
                <div className="text-gray-600 text-sm">
                  Stay tuned for weekly updates and exclusive content!
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-brand-orange text-white font-semibold py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                Awesome, thanks!
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FiX className="text-gray-400 text-lg" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
