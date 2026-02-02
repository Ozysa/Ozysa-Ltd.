import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2Icon, 
  TruckIcon, 
  ShoppingBagIcon,
  UsersIcon,
  CodeIcon,
  ShieldCheckIcon
} from './Icons';

interface TradeService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
  features: string[];
  detailed: {
    fullDescription: string;
    keyBenefits: string[];
    capabilities: string[];
    caseStudy: string;
    metrics: { label: string; value: string }[];
    image: string;
  };
}

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

const tradeServices: TradeService[] = [
  {
    id: 1,
    title: "International Trade",
    description: "Strategic sourcing and export capabilities connecting Bangladesh manufacturers with global markets. Compliance with all international trade frameworks and regulations.",
    icon: <Globe2Icon />,
    color: "bg-blue-600",
    shadowColor: "shadow-blue-100",
    features: ["Sourcing & Procurement", "Export Management", "Customs Compliance", "Market Expansion"],
    detailed: {
      fullDescription: "Ozysa Ltd. operates as a strategic bridge between Bangladesh's manufacturing capabilities and global markets. We provide end-to-end international trade solutions including strategic sourcing, procurement optimization, and export facilitation across multiple product categories.",
      keyBenefits: [
        "Access to verified manufacturers and suppliers across Bangladesh",
        "Comprehensive market analysis and demand forecasting",
        "Customs clearance and regulatory compliance expertise",
        "Competitive pricing and quality assurance protocols",
        "Flexible payment terms and credit facilities",
        "Real-time shipment tracking and documentation"
      ],
      capabilities: [
        "Import from 35+ countries on behalf of partners",
        "Export textiles, electronics, leather goods, and industrial products",
        "Manage complex multi-country supply chains",
        "Handle government-to-business trade agreements",
        "Facilitate FTA (Free Trade Agreement) optimization",
        "Provide market intelligence and trend analysis"
      ],
      caseStudy: "Recently facilitated $2.5M textile export deal to Southeast Asian markets, managing end-to-end logistics, customs, and compliance across 4 countries.",
      metrics: [
        { label: "Export Markets", value: "35+" },
        { label: "Annual Trade Volume", value: "$50M+" },
        { label: "Supplier Network", value: "500+" },
        { label: "Clearance Success Rate", value: "99.8%" }
      ],
      image: "https://images.unsplash.com/photo-1494783367193-149034c05e41?auto=format&fit=crop&q=80&w=1200"
    }
  },
  {
    id: 2,
    title: "Digital Commerce",
    description: "Integrated B2B and B2C e-commerce solutions powered by Ozysa.com. Secure payment processing, inventory management, and seamless online buying/selling experiences.",
    icon: <ShoppingBagIcon />,
    color: "bg-emerald-600",
    shadowColor: "shadow-emerald-100",
    features: ["Payment Gateway", "Inventory Sync", "B2B Portal", "Analytics Dashboard"],
    detailed: {
      fullDescription: "Ozysa.com represents our comprehensive digital commerce ecosystem, connecting buyers and sellers across B2B and B2C channels. Our platform combines enterprise-grade security, real-time inventory management, and intelligent analytics to deliver seamless online commerce experiences.",
      keyBenefits: [
        "PCI-DSS compliant secure payment processing",
        "Multi-currency support for international transactions",
        "Real-time inventory synchronization across channels",
        "Advanced fraud detection and prevention systems",
        "Customizable storefront and product catalogs",
        "Integrated logistics partner network"
      ],
      capabilities: [
        "Manage 10,000+ products across multiple categories",
        "Process 10K+ daily transactions securely",
        "Support B2B bulk ordering with negotiated pricing",
        "Generate detailed sales analytics and forecasting",
        "Implement dynamic pricing strategies",
        "Provide mobile-first shopping experiences"
      ],
      caseStudy: "Ozysa.com processed 500K+ orders in 2025, serving 50,000+ registered buyers with 99.9% uptime and zero security breaches.",
      metrics: [
        { label: "Daily Orders", value: "10K+" },
        { label: "Registered Buyers", value: "50K+" },
        { label: "Product Categories", value: "150+" },
        { label: "Platform Uptime", value: "99.9%" }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    }
  },
  {
    id: 3,
    title: "Logistics & Warehousing",
    description: "Comprehensive door-to-door delivery systems with advanced stock management and warehouse services. Real-time tracking ensures efficient product distribution.",
    icon: <TruckIcon />,
    color: "bg-amber-600",
    shadowColor: "shadow-amber-100",
    features: ["Door-to-Door Service", "Real-time Tracking", "Stock Management", "Warehouse Ops"],
    detailed: {
      fullDescription: "Our logistics division provides end-to-end supply chain solutions with state-of-the-art warehouse facilities, intelligent inventory management, and nationwide last-mile delivery capabilities. We ensure your products reach customers efficiently and on-time.",
      keyBenefits: [
        "8 strategically located warehouses across Bangladesh",
        "GPS-tracked fleet with 500+ vehicles",
        "Real-time order tracking and delivery updates",
        "Climate-controlled storage for sensitive goods",
        "Automated inventory management systems",
        "Same-day delivery options in major cities"
      ],
      capabilities: [
        "Handle 100K+ daily shipments",
        "Manage complex cold-chain logistics",
        "Provide reverse logistics for returns",
        "Offer white-label logistics solutions",
        "Execute pickup and consolidation services",
        "Handle hazardous and fragile goods safely"
      ],
      caseStudy: "Successfully managed logistics for 500K+ product deliveries in 2025 with 97.5% on-time delivery rate and 99.2% damage-free record.",
      metrics: [
        { label: "Daily Shipments", value: "100K+" },
        { label: "Warehouse Locations", value: "8" },
        { label: "Fleet Size", value: "500+" },
        { label: "On-time Rate", value: "97.5%" }
      ],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200"
    }
  },
  {
    id: 4,
    title: "General Trading & Agency",
    description: "Trusted distributor and authorized agent for industrial equipment, consumer goods, and specialized products. Partnerships with verified suppliers and manufacturers.",
    icon: <UsersIcon />,
    color: "bg-indigo-600",
    shadowColor: "shadow-indigo-100",
    features: ["Supplier Network", "Product Distribution", "Agency Services", "Partnership Models"],
    detailed: {
      fullDescription: "As a trusted general trading and agency partner, Ozysa Ltd. serves as the authorized distributor and agent for premium industrial equipment, consumer goods, and specialized products. We leverage our extensive network to deliver value across diverse market segments.",
      keyBenefits: [
        "Partnerships with 200+ verified global suppliers",
        "Exclusive distribution rights for premium brands",
        "Territory-based dealer network across Bangladesh",
        "Competitive wholesale pricing structures",
        "Marketing and sales support programs",
        "Technical training and after-sales service"
      ],
      capabilities: [
        "Distribute across 15+ product categories",
        "Manage exclusive agency agreements",
        "Provide dealer financing solutions",
        "Execute brand activation campaigns",
        "Offer warranty and technical support",
        "Handle bulk procurement and consolidation"
      ],
      caseStudy: "Represent 25+ international brands as authorized distributor, generating $30M+ annual revenue with 100+ active dealer partners.",
      metrics: [
        { label: "Active Distributors", value: "100+" },
        { label: "Brand Partnerships", value: "25+" },
        { label: "Product Categories", value: "15+" },
        { label: "Annual Revenue", value: "$30M+" }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    }
  }
];

const stats: Stat[] = [
  { label: "Countries Reached", value: "35", suffix: "+" },
  { label: "Products Delivered", value: "500K", suffix: "+" },
  { label: "Verified Partners", value: "200", suffix: "+" },
  { label: "Daily Transactions", value: "10K", suffix: "+" }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  hover: { y: -8, transition: { duration: 0.3 } }
};

export const GlobalTrade: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<TradeService | null>(null);

  return (
    <>
      <section id="global-trade" className="py-32 relative overflow-hidden bg-white">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-40"></div>
          <div className="absolute bottom-0 -left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-50 to-transparent rounded-full opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Global Commerce</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              Connecting Markets, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Delivering Excellence.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Ozysa Ltd. bridges the gap between global manufacturers and local consumers through a robust, tech-enabled supply chain. We operate across international trade, digital commerce, logistics, and strategic partnerships.
            </p>
          </motion.div>

          {/* Services Grid - 2x2 Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 mb-32"
          >
            {tradeServices.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setExpandedId(service.id)}
                onMouseLeave={() => setExpandedId(null)}
                onClick={() => setSelectedService(service)}
                className="group bento-card p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 cursor-pointer relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${service.shadowColor} transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <motion.div
                    animate={{ height: expandedId === service.id ? "auto" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-6"
                  >
                    <ul className="space-y-3 pt-4 border-t border-slate-100">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${service.color} mt-2`}></span>
                          <span className="text-slate-600 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-50 group-hover:bg-blue-600 text-slate-900 group-hover:text-white font-bold text-sm transition-all duration-300 border border-slate-100 group-hover:border-blue-600"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Stats Background Decor */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <div className="text-4xl md:text-5xl font-black text-white mb-1">
                      {stat.value}
                      {stat.suffix && <span className="text-blue-400 text-3xl md:text-4xl ml-1">{stat.suffix}</span>}
                    </div>
                  </motion.div>
                  <p className="text-slate-300 font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center space-x-3 px-6 py-4 rounded-full bg-blue-50 border border-blue-100">
              <ShieldCheckIcon />
              <span className="text-slate-700 font-bold text-sm">
                Certified & Compliant with International Trade Standards
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header with Image */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-t-[2.5rem]">
                <img 
                  src={selectedService.detailed.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-900 font-bold transition-all z-10"
                >
                  ✕
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className={`w-16 h-16 ${selectedService.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {selectedService.icon}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                    {selectedService.title}
                  </h1>
                  <p className="text-slate-100 text-lg font-medium max-w-2xl">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 space-y-12">
                {/* Full Description */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-4">Overview</h2>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {selectedService.detailed.fullDescription}
                  </p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Key Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.detailed.keyBenefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 ${selectedService.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                          ✓
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Core Capabilities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.detailed.capabilities.map((capability, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 border border-blue-100"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 ${selectedService.color} rounded-full mt-1`}></div>
                        <span className="text-slate-700 font-medium text-sm">{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Key Metrics</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedService.detailed.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-gradient-to-br ${selectedService.color} p-6 rounded-2xl text-white text-center`}
                      >
                        <div className="text-3xl font-black mb-2">{metric.value}</div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-90">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-10 rounded-2xl text-white">
                  <h3 className="text-xl font-black mb-4">Case Study</h3>
                  <p className="text-slate-100 font-medium leading-relaxed">
                    {selectedService.detailed.caseStudy}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-5 bg-gradient-to-r ${selectedService.color} to-blue-600 text-white rounded-2xl font-bold text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all`}
                  >
                    Get Started with {selectedService.title}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
