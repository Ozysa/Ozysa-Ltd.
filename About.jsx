import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  Linkedin,
  Mail,
  Monitor,
  Truck,
  Zap,
  Globe,
  Cpu,
  ShieldCheck,
  Quote,
  Lightbulb,
  Target,
  Award,
  Settings
} from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Banner */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Ozysa Ltd. - Empowering Industries Through Innovation and Excellence
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Company</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ozysa Ltd. operates as a premier conglomerate with a legal mandate to drive growth across multiple sectors.
              Our integrated approach combines cutting-edge digital solutions, global trade facilitation, agricultural manufacturing,
              and industrial excellence to create sustainable value for Bangladesh and beyond.
            </p>
          </motion.div>

          {/* Core Sectors */}
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Digital Solutions</h3>
              <p className="text-slate-600">Smart technologies and innovative platforms</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Global Trade</h3>
              <p className="text-slate-600">International commerce and logistics</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
              <Truck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Agro Industry</h3>
              <p className="text-slate-600">Agricultural manufacturing and processing</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-xl transition-shadow">
              <Cpu className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Industrial Excellence</h3>
              <p className="text-slate-600">Quality manufacturing and engineering</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Chairman's Vision Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Parallax Background Effect */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)',
            y: parallaxY
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-wider">
                Chairman's Vision
              </h2>
              <Lightbulb className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 tracking-wide">
              Innovating with Purpose, Leading with Integrity
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Chairman Image */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400/30">
                <img
                  src="/chairman.jpeg"
                  alt="Md. Shawon Ahmed - Chairman of Ozysa Ltd."
                  className="w-full h-[600px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Floating Name Badge */}
                <div className="absolute bottom-6 left-6 bg-yellow-400 text-slate-900 px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                  Md. Shawon Ahmed
                  <div className="text-sm font-semibold text-slate-700">Chairman, Ozysa Ltd.</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl">
                {/* Large Quote Icon */}
                <div className="absolute -top-6 -left-6">
                  <Quote className="w-16 h-16 text-yellow-400 opacity-80" />
                </div>

                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-serif italic mb-8 pl-12">
                  "As Chairman, my commitment is to build a tech-driven industrial ecosystem in Bangladesh. Through projects like Smart Gram, we are not just providing services—we are empowering the grassroots with digital tools to thrive in a global economy."
                </blockquote>

                {/* Signature Section */}
                <div className="border-t border-yellow-400/30 pt-8 mt-8">
                  <div className="flex items-end justify-between">
                    <div className="text-yellow-400">
                      <p className="font-bold text-lg">Md. Shawon Ahmed</p>
                      <p className="text-sm text-yellow-200">Chairman, Ozysa Ltd.</p>
                    </div>
                    <div className="text-right">
                      <img
                        src="/signature.jpeg"
                        alt="Md. Shawon Ahmed Signature"
                        className="w-40 h-16 object-contain opacity-90"
                      />
                    </div>
                  </div>
                </div>

                {/* Leadership Links */}
                <div className="flex space-x-4 mt-8 pt-6 border-t border-white/20">
                  <a
                    href="https://www.linkedin.com/in/md-shawon-ahmed-0321b9237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:shawon00650@gmail.com"
                    className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="https://shawonahmed.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400/10 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>
            </motion.div>
          </div>

          {/* Key Initiatives Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
              <ShieldCheck className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-semibold">Key Initiatives: Smart Gram • Digital Transformation • Industrial Excellence</span>
              <ShieldCheck className="w-6 h-6 text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managing Director's Vision Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Managing Director's Vision</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 tracking-wide">
              Execution with Precision & Integrity
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* MD Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 border-4 border-blue-200">
                <div className="w-full h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <Users className="w-20 h-20 text-slate-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Md. Elius Miah</h3>
                    <p className="text-blue-600 font-semibold text-lg">Managing Director</p>
                    <p className="text-slate-600 mt-2">Ozysa Ltd.</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl">
                  Operational Leadership
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-400/20 rounded-full blur-xl"></div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-200">
                <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-8">
                  "My mission is to transform Ozysa Ltd.'s strategic goals into operational excellence. We focus on building robust industrial infrastructures and high-efficiency supply chains that set new benchmarks for quality and reliability in Bangladesh and beyond."
                </blockquote>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Operational Efficiency</h4>
                      <p className="text-slate-600">Streamlining processes for maximum productivity</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Industrial Growth</h4>
                      <p className="text-slate-600">Driving expansion and market leadership</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Global Standards</h4>
                      <p className="text-slate-600">Meeting international quality benchmarks</p>
                    </div>
                  </div>
                </div>

                {/* Signature and Contact */}
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-slate-600">
                      <p className="font-semibold text-lg text-slate-900">Md. Elius Miah</p>
                      <p>Managing Director, Ozysa Ltd.</p>
                    </div>
                    <div className="flex space-x-3">
                      <a href="mailto:elius@ozysa.com" className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-md">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-slate-600 hover:text-white transition-colors shadow-md">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-blue-400/10 rounded-full blur-lg"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-slate-400/10 rounded-full blur-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that guide our operations</p>
          </motion.div>

          <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">Operating with honesty and transparency in all our dealings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">Striving for the highest standards in everything we do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">Embracing new technologies and creative solutions</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;