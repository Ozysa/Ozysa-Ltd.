import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ZapIcon, TruckIcon, UsersIcon } from './Icons';

interface AgroIndustryDetailProps {
  onBack?: () => void;
}

interface ProductionLine {
  id: number;
  title: string;
  description: string;
  items: string[];
  image: string;
  color: string;
}

interface GreenInitiative {
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
  color: string;
}

const productionLines: ProductionLine[] = [
  {
    id: 1,
    title: "Flour Mills & Grain Processing",
    description: "State-of-the-art auto flour mills equipped with advanced milling technology. Processing capacity of 500+ tons daily with quality standards exceeding international norms.",
    items: ["Auto Milling Technology", "500+ Tons Daily Capacity", "ISO Certified Production", "Quality Control Labs", "Eco-Friendly Processing"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-600 to-orange-600"
  },
  {
    id: 2,
    title: "Food Processing & Packaging",
    description: "Modern food processing plants producing ready-to-eat meals, packaged snacks, and specialty products. Adhering to all food safety and hygiene standards.",
    items: ["HACCP Certified", "Advanced Packaging Lines", "Cold Storage Facilities", "100+ SKUs Produced", "Export-Grade Quality"],
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    color: "from-red-600 to-pink-600"
  },
  {
    id: 3,
    title: "Drinking Water & Purification",
    description: "Advanced RO and filtration plants producing safe, clean drinking water. Serving communities and businesses across Bangladesh with certified purity standards.",
    items: ["Multi-Stage Filtration", "RO Technology", "Daily Production: 100K Liters", "Lab Testing", "Community Supply"],
    image: "https://images.unsplash.com/photo-1556110928-5fda48e1e1c7?auto=format&fit=crop&q=80&w=800",
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: 4,
    title: "Electrical Manufacturing",
    description: "Production facility for LEDs, solar panels, fans, and electrical components. Meeting domestic demand and export requirements with modern quality assurance.",
    items: ["LED Manufacturing", "Solar Panel Assembly", "Fan Production", "Quality Certifications", "R&D Lab"],
    image: "https://images.unsplash.com/photo-1531484590104-7bbb00baacbc?auto=format&fit=crop&q=80&w=800",
    color: "from-yellow-600 to-amber-600"
  }
];

const greenInitiatives: GreenInitiative[] = [
  {
    title: "Solar Energy Integration",
    description: "All manufacturing facilities powered with solar panels. Reducing carbon footprint and operational costs while supporting sustainable energy adoption.",
    impact: "Saving 2 Million kWh annually",
    icon: <ZapIcon />,
    color: "bg-yellow-50 border-yellow-200 text-yellow-700"
  },
  {
    title: "Hydroponic Farming",
    description: "Modern vertical farming with hydroponic systems. Year-round vegetable production with 90% water efficiency and zero pesticides.",
    impact: "Producing 50 tons monthly",
    icon: <UsersIcon />,
    color: "bg-green-50 border-green-200 text-green-700"
  },
  {
    title: "Fish & Shrimp Farming",
    description: "Sustainable aquaculture operations with modern breeding and rearing techniques. High-yield, disease-resistant stock ensuring premium seafood quality.",
    impact: "50,000 tons annual yield",
    icon: <TruckIcon />,
    color: "bg-blue-50 border-blue-200 text-blue-700"
  },
  {
    title: "Livestock Management",
    description: "Dairy, poultry, and cattle farming with modern veterinary care. Integrated farms producing milk, meat, and eggs with animal welfare standards.",
    impact: "Serving 100K+ families",
    icon: <UsersIcon />,
    color: "bg-amber-50 border-amber-200 text-amber-700"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export const AgroIndustryDetail: React.FC<AgroIndustryDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
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

      <section id="agro-industry-detail" className="py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
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
          <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Manufacturing Excellence</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            Agro & Industry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Production Powerhouse</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Vertically integrated manufacturing and agriculture operations producing food, energy, electrical goods, and sustainable farm products for domestic and export markets.
          </p>
        </motion.div>

        {/* Production Lines Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">Our Production Lines</h2>
          
          <div className="space-y-20">
            {productionLines.map((line, idx) => (
              <motion.div
                key={line.id}
                variants={itemVariants}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <motion.div
                  className={`relative h-80 md:h-96 rounded-2xl overflow-hidden group ${idx % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={line.image}
                    alt={line.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${line.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Production Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                    <p className="text-sm font-black text-slate-900">Production Line {line.id}</p>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${line.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                    <ZapIcon />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{line.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">{line.description}</p>

                  {/* Capabilities List */}
                  <ul className="space-y-3 mb-8">
                    {line.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${line.color}`}></span>
                        <span className="text-slate-700 font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Certified Badge */}
                  <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg w-fit">
                    <span className="text-lg">✓</span>
                    <span className="text-sm font-bold text-green-700">ISO & International Certified</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Green Energy & Sustainability */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32"
        >
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center">Green Energy & Sustainability Initiatives</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {greenInitiatives.map((initiative, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-8 rounded-2xl border-2 ${initiative.color}`}
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-current opacity-10`}>
                    {initiative.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{initiative.title}</h3>
                    <p className="text-slate-600 font-medium">{initiative.description}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t-2 border-current border-opacity-20">
                  <p className="text-sm font-black uppercase tracking-wider text-slate-600 mb-2">Impact</p>
                  <p className="text-lg font-black text-slate-900">{initiative.impact}</p>
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
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-12 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12">Production & Impact Metrics</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Daily Production", value: "500+", unit: "Tons", icon: "📦" },
                { label: "Agricultural Output", value: "50,000+", unit: "Tons Annually", icon: "🌾" },
                { label: "Green Energy", value: "2M", unit: "kWh/year", icon: "☀️" },
                { label: "Families Supported", value: "100K+", unit: "Direct & Indirect", icon: "👥" }
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
                  <div className="text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-slate-400 font-bold text-xs uppercase tracking-wider">{stat.unit}</div>
                  <div className="text-slate-300 text-sm font-bold mt-2">{stat.label}</div>
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
