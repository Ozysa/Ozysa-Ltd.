import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, ShoppingCart, HelpCircle, Leaf, Monitor, Server, Cloud, Smartphone, ArrowLeft, ExternalLink, Minimize2, Maximize2 } from 'lucide-react';

interface SmartGramCaseStudyProps {
  onBack?: () => void;
}

const SmartGramCaseStudy: React.FC<SmartGramCaseStudyProps> = ({ onBack }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const impactCards = [
    {
      icon: Users,
      title: '500+ Farmers Connected',
      description: 'Direct access to agricultural expertise and market opportunities'
    },
    {
      icon: Clock,
      title: '24/7 Digital Helpdesk',
      description: 'Round-the-clock support for government services and information'
    },
    {
      icon: ShoppingCart,
      title: 'Secured Rural E-commerce',
      description: 'Safe marketplace connecting artisans to national markets'
    }
  ];

  const techSpecs = [
    { icon: Monitor, name: 'React', desc: 'Modern frontend framework' },
    { icon: Smartphone, name: 'Tailwind CSS', desc: 'Utility-first styling' },
    { icon: Cloud, name: 'Vercel Deployment', desc: 'Global CDN hosting' }
  ];

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

      {/* Header Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Smart Gram: <br />
              <span className="text-green-400">Empowering Rural Bangladesh</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              An integrated digital ecosystem bridging the rural-urban divide through technology, agriculture, and commerce.
            </p>
            <a
              href="https://smart-village-pi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors shadow-lg"
            >
              Launch Full App
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Live Application Preview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Live Application Preview</h2>
            <p className="text-xl text-slate-600">Experience the Smart Gram platform in action</p>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white p-8 rounded-3xl shadow-lg">
            <iframe
              src="https://smart-village-pi.vercel.app"
              className="w-full h-96 rounded-2xl border-0"
              title="Smart Gram Live Preview"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Impact Overview</h2>
            <p className="text-xl text-slate-600">Transforming rural communities through digital innovation</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactCards.map((card, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Digital Helpdesk */}
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">Digital Helpdesk</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A 24/7 digital assistance platform providing instant access to government services, social support, and essential information. Farmers and rural residents can get help with documentation, subsidies, healthcare information, and emergency services without leaving their villages.
              </p>
            </div>
            <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
              <span className="text-slate-500">Helpdesk Interface Mockup</span>
            </div>
          </motion.div>

          {/* Agro-Services */}
          <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
              <span className="text-slate-500">Agro-Services Dashboard Mockup</span>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">Agro-Services</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Comprehensive agricultural technology integration offering real-time weather data, crop monitoring, expert consultation, and market price information. Farmers receive personalized recommendations for optimal planting, pest control, and harvest timing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-slate-600 mb-12">Built with modern technologies for reliability and performance</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {techSpecs.map((tech, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-slate-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartGramCaseStudy;