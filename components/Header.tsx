'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { 
    name: "What we do", 
    href: "/services",
    submenu: [
      { name: "Software Development", href: "/services/software-engineering" },
      { name: "Marketing & Brand", href: "/services/marketing-brand" },
      { name: "Data Architecture & Engineering", href: "/services/data-engineering" },
      { name: "AI & Machine Learning", href: "/services/machine-learning" },
      { name: "Resource Augmentation", href: "/services/resource-augmentation" },
      { name: "Business Intelligence", href: "/services/business-intelligence" },
    ]
  },
  { name: "Our projects", href: "/our-projects" },
  { 
    name: "About us", 
    href: "/about-us",
    submenu: [
      { name: "Our story", href: "/about-us#our-story" },
      { name: "Our team", href: "/about-us#team" }
    ]
  },
  { name: "Insights", href: "/insights" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0.1)', 'rgba(16, 6, 76, 0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  // Reset menu state when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const menuVariants = {
    closed: { opacity: 0, y: -20, scale: 0.95 },
    open: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        style={{ 
          background: headerBackground,
          backdropFilter: headerBlur
        }}
      >
        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center p-2 border border-gray-200/50">
                <Image
                  src={logo}
                  alt="Fairfirst Insurance Logo"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div>
              <motion.h1 
                className="text-xl sm:text-2xl font-black text-white cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => window.location.href = "/"}
              >
                <span className="bg-blue-400 bg-clip-text text-transparent">
                  KAINO
                </span>
                <span className="relative">
                  VATION
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-blue-400 to-indigo-400 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </span>
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex md:items-center md:space-x-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || link.submenu?.some(sub => pathname.startsWith(sub.href.split('#')[0]));
                return (
                  <div key={link.name} className="relative group py-6">
                    <motion.a
                      href={link.href}
                      className={`relative flex items-center gap-1 transition-colors duration-300 font-medium ${
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {link.name}
                      {link.submenu && <FiChevronDown className="transition-transform group-hover:rotate-180" />}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 origin-left"
                          layoutId="activeIndicator"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {!isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.a>

                    {/* Submenu */}
                    {link.submenu && (
                      <div className="absolute left-0 top-full opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                        <div className="bg-[#10064C]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[260px] py-2">
                          {link.submenu.map((subItem) => (
                            <a 
                              key={subItem.name} 
                              href={subItem.href}
                              className="block px-5 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center">
              <motion.button
                className="hidden lg:flex items-center justify-center group relative bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-full overflow-hidden shadow-lg min-w-[200px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0px 10px 30px -10px rgba(16, 6, 76, 0.4)" 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "/#cta"}
              >
                <span className="relative z-10 flex items-center">
                  Book a discovery call
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="cta-bg"
                />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-[#10064C]/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Menu Content */}
        <motion.div
          className="relative flex flex-col items-center justify-center h-full space-y-8 overflow-y-auto py-20"
          variants={menuVariants}
        >
          <div className="flex flex-col items-center w-full max-w-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || link.submenu?.some(sub => pathname.startsWith(sub.href.split('#')[0]));
              return (
                <div key={link.name} className="flex flex-col items-center w-full mb-6">
                  <motion.a
                    href={link.href}
                    className={`flex items-center gap-2 text-3xl font-bold transition-colors duration-300 ${
                      isActive 
                        ? 'text-blue-400' 
                        : 'text-white hover:text-blue-400'
                    }`}
                    variants={itemVariants}
                    onClick={() => !link.submenu && setIsMenuOpen(false)}
                  >
                    {link.name}
                    {isActive && !link.submenu && (
                      <motion.div
                        className="w-full h-1 mt-1 bg-linear-to-r from-blue-400 to-indigo-400"
                        layoutId="mobileActiveIndicator"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                  
                  {link.submenu && (
                    <motion.div 
                      variants={itemVariants}
                      className="flex flex-col items-center mt-4 space-y-4"
                    >
                      {link.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="text-xl font-medium text-white/70 hover:text-white transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
          
          <motion.button
            className="mt-8 text-white font-bold bg-linear-to-r from-blue-500 to-indigo-600 py-4 px-8 rounded-full shadow-lg min-w-[200px]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/#cta"}
          >
            Get in touch
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
