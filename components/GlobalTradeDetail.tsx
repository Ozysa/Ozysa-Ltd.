import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Globe2Icon, TruckIcon, ShoppingBagIcon, ShieldCheckIcon } from './Icons';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TradeService {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Global Sourcing",
    description: "Identify and verify suppliers across 35+ countries for optimal quality and pricing",
    icon: <Globe2Icon />
  },
  {
    id: 2,
    title: "Procurement & QA",
    description: "Rigorous quality checks and compliance verification with international standards",
    icon: <ShieldCheckIcon />
  },
  {
    id: 3,
    title: "Logistics & Shipping",
    description: "Managed door-to-door delivery with real-time tracking and insurance coverage",
    icon: <TruckIcon />
  },
  {
    id: 4,
    title: "Customs & Compliance",
    description: "Expert handling of tariffs, documentation, and regulatory requirements",
    icon: <ShieldCheckIcon />
  },
  {
    id: 5,
    title: "Warehouse & Storage",
    description: "State-of-the-art facilities with climate control and inventory management",
    icon: <TruckIcon />
  },
  {
    id: 6,
    title: "Local Distribution",
    description: "Last-mile delivery to retailers, wholesalers, and end consumers nationwide",
    icon: <TruckIcon />
  }
];

const tradeServices: TradeService[] = [
  {
    title: "International Import-Export",
    description: "Direct sourcing from global manufacturers. Ozysa connects Bangladesh's manufacturing prowess with international markets. Competence in handling textile exports, electronics, leather goods, and industrial equipment."
  },
  {
    title: "Door-to-Door Delivery",
    description: "500+ vehicle fleet with GPS tracking. Comprehensive last-mile solutions ensuring products reach customers on time and in perfect condition across all major cities and regional areas."
  },
  {
    title: "Warehouse & Inventory Management",
    description: "8 strategic warehouse locations with climate control. Advanced stock management systems provide real-time visibility, automated reordering, and efficient space utilization."
  },
  {
    title: "Secured B2B & B2C Payment Processing",
    description: "PCI-DSS compliant secure gateway. Multi-currency support, fraud detection, and encrypted transactions. Seamless integration with Ozysa.com e-commerce platform."
  },
  {
    title: "Global Agency & Distributorship",
    description: "Authorized distributor for 25+ international brands. Exclusive territory rights, dealer support programs, and brand activation across Bangladesh and South Asia."
  },
  {
    title: "Diverse Trading Network",
    description: "Trading across 15+ product categories. From consumer electronics to industrial equipment, agricultural products to specialty chemicals—we handle it all professionally."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

interface GlobalTradeDetailProps {
  onBack?: () => void;
}

export const GlobalTradeDetail: React.FC<GlobalTradeDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      {onBack && (
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-semibold text-slate-600">Back</span>
          </button>
        </div>
      )}

      <section id="global-trade-detail" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">The Supply Chain Powerhouse</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Global Trade & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Logistics Excellence</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            End-to-end supply chain solutions connecting global manufacturers with local markets through secured transactions, intelligent logistics, and trusted partnerships.
          </p>
        </motion.div>

        {/* Process Flow - SVG Diagram Style */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16 text-center">The Ozysa Supply Chain Journey</h2>
          
          {/* Desktop Process Flow */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="grid grid-cols-3 gap-8">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Connector Arrow */}
                    {idx < processSteps.length - 1 && idx % 3 !== 2 && (
                      <div className="absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 hidden group-hover:block"></div>
                    )}

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group h-full">
                      {/* Step Number Circle */}
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-lg mb-6 flex-shrink-0">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                        {step.icon}
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Process Flow - Vertical */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black">
                    {step.id}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex-1">
                  <h3 className="text-lg font-black text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 font-medium text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid - Zig Zag Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24 mb-32"
        >
          {tradeServices.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image/Visual */}
              <motion.div
                className={`relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group ${idx % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1494783367193-149034c05e41?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1513521399740-d16631754411?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1556740711-e1a3c2a94a67?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1516321318423-f06f70504c11?auto=format&fit=crop&q=80&w=600",
                    "https://images.unsplash.com/photo-1450133064042-b8bbb27a6f7f?auto=format&fit=crop&q=80&w=600"
                  ][idx]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>

              {/* Text Content */}
              <motion.div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="text-blue-600 font-bold uppercase tracking-[0.15em] text-xs">Service {idx + 1}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Certified Badge */}
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl w-fit">
                  <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-700 uppercase tracking-wide">Certified & Verified</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Metrics Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12">Our Supply Chain Strength</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Countries Reached", value: "35+", icon: "🌍" },
                { label: "Fleet Vehicles", value: "500+", icon: "🚚" },
                { label: "Warehouse Locations", value: "8", icon: "🏭" },
                { label: "On-Time Delivery", value: "97.5%", icon: "✓" }
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{metric.icon}</div>
                  <div className="text-4xl font-black mb-2">{metric.value}</div>
                  <div className="text-slate-300 font-bold text-sm uppercase tracking-wider">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};
