import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { CodeIcon, UsersIcon, TruckIcon, ShieldCheckIcon } from './Icons';

interface StrategicAdvisoryDetailProps {
  onBack?: () => void;
}

interface ConsultancyService {
  id: number;
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface ImpactArea {
  title: string;
  metric: string;
  description: string;
  icon: string;
  color: string;
}

const consultancyServices: ConsultancyService[] = [
  {
    id: 1,
    title: "Business Management & Strategy",
    description: "Strategic planning, organizational restructuring, and operational excellence programs. Helping enterprises scale sustainably with data-driven decision making.",
    capabilities: [
      "5-Year Strategic Planning",
      "Market Entry Strategy",
      "Organizational Design",
      "Process Optimization",
      "Risk Management"
    ],
    icon: <UsersIcon />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "MIS Consultancy & ERP Implementation",
    description: "Enterprise resource planning, business intelligence systems, and digital infrastructure setup. Transforming businesses with integrated information systems.",
    capabilities: [
      "ERP System Selection & Implementation",
      "Business Intelligence Dashboards",
      "Database Architecture Design",
      "Integration Services",
      "System Security & Compliance"
    ],
    icon: <CodeIcon />,
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50"
  },
  {
    id: 3,
    title: "Digital Transformation Strategy",
    description: "Guiding enterprises through complete digital overhaul. From legacy systems to cloud-native solutions, ensuring smooth transitions and maximum ROI.",
    capabilities: [
      "Digital Readiness Assessment",
      "Technology Roadmap Development",
      "Cloud Migration Strategy",
      "Change Management Programs",
      "Performance Metrics & KPIs"
    ],
    icon: <TruckIcon />,
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50"
  },
  {
    id: 4,
    title: "IT Training & Community Empowerment",
    description: "Comprehensive IT training programs for skill development and career advancement. Empowering communities through digital literacy and technical expertise.",
    capabilities: [
      "Coding & Web Development Bootcamps",
      "Data Analytics Training",
      "Cybersecurity Certification Programs",
      "Digital Marketing Workshops",
      "Youth Entrepreneurship Programs"
    ],
    icon: <ShieldCheckIcon />,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50"
  }
];

const impactAreas: ImpactArea[] = [
  {
    title: "Smart Gram - Rural Empowerment",
    metric: "50K+ Users",
    description: "Digital platform connecting rural communities with agricultural services, e-commerce, and digital helpdesk support.",
    icon: "🌾",
    color: "from-green-600 to-emerald-600"
  },
  {
    title: "Smart Fleet Management",
    metric: "500+ Vehicles",
    description: "Real-time fleet tracking and battery management system for Syntex Motors, optimizing operations and reducing costs.",
    icon: "🚚",
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "E-Commerce Platform",
    metric: "500K+ Orders",
    description: "Ozysa.com infrastructure supporting 10K+ daily transactions with secure payments and inventory management.",
    icon: "🛒",
    color: "from-pink-600 to-rose-600"
  },
  {
    title: "Digital Literacy",
    metric: "10K+ Trained",
    description: "IT training programs empowering youth with coding, data analytics, and digital skills for career growth.",
    icon: "💻",
    color: "from-purple-600 to-indigo-600"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export const StrategicAdvisoryDetail: React.FC<StrategicAdvisoryDetailProps> = ({ onBack }) => {
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

      <section id="strategic-advisory-detail" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
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
          <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Digital Transformation</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Strategic Advisory & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Digital Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Business transformation through strategic consulting, enterprise technology implementation, and community digital empowerment. Driving growth through innovation.
          </p>
        </motion.div>

        {/* Consultancy Services - Zig Zag Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24 mb-32"
        >
          {consultancyServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Visual */}
              <motion.div
                className={`relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} flex items-center justify-center group ${idx % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/10 rounded-3xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {service.id === 1 && "📊"}
                    {service.id === 2 && "💾"}
                    {service.id === 3 && "☁️"}
                    {service.id === 4 && "🎓"}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Service Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-xs font-black text-slate-900 uppercase">Service {service.id}</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{service.title}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{service.description}</p>

                {/* Capabilities */}
                <div className={`${service.bgColor} p-6 rounded-2xl mb-8`}>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></span>
                        <span className="text-sm font-semibold text-slate-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg w-fit">
                  <span className="text-lg">✓</span>
                  <span className="text-sm font-bold text-green-700">Industry Expertise Verified</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Map - Real-World Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">Impact Map: Driving Business Growth & Digital Adoption</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${area.color} p-8 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="text-6xl mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-black mb-2">{area.title}</h3>
                  <div className="text-3xl font-black opacity-90">{area.metric}</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 font-medium leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Growth Framework */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-slate-100 mb-32"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Our Consulting Methodology</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Deep-dive analysis of current state, challenges, and opportunities" },
              { step: "2", title: "Strategy", desc: "Develop tailored roadmap aligned with business objectives" },
              { step: "3", title: "Implementation", desc: "Execute solutions with expert guidance and best practices" },
              { step: "4", title: "Optimization", desc: "Continuous monitoring, support, and performance enhancement" }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Arrow to next item */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-16 -right-3 text-slate-300 text-2xl">→</div>
                )}

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 font-medium text-sm">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12">Our Consulting Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Clients Served", value: "100+", icon: "🏢" },
                { label: "Projects Delivered", value: "500+", icon: "✓" },
                { label: "Communities Empowered", value: "50K+", icon: "👥" },
                { label: "Success Rate", value: "98%", icon: "📈" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-slate-300 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
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
