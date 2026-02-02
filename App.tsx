import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Monitor,
  Truck,
  Zap,
  Users,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  Globe,
  Code,
  Linkedin,
  Facebook,
  Twitter,
  Mail,
  ArrowLeft,
  ExternalLink,
  ChevronUp,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import About from './About';
import Blog from './Blog';

interface ContactFormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'smart-gram' | 'global-trade' | 'agro-industry' | 'strategic-advisory'>('home');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', category: 'General Inquiry', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const SHOP_LINK = "https://www.google.com/search?q=Ozysa.com";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 transition-all duration-500 flex justify-center pt-4">
        <div className={`flex items-center justify-between px-8 py-3 transition-all duration-500 ${isScrolled ? 'glass rounded-full w-[95%] lg:w-[80%] shadow-lg' : 'w-full px-12'} backdrop-blur-md bg-white/80`}>
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
              <span className="text-white font-black text-lg italic">O</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">
              OZYSA<span className="text-blue-600">LTD</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#home" className="transition-colors hover:text-blue-600">Home</a>
            <Link to="/about" className="transition-colors hover:text-blue-600">About</Link>
            <a href="#digital" className="transition-colors hover:text-blue-600">Digital</a>
            <a href="#trade" className="transition-colors hover:text-blue-600">Trade</a>
            <a href="#contact" className="transition-colors hover:text-blue-600">Contact</a>
          </div>

          <a
            href={SHOP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-2 bg-blue-600 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all shadow-md hover:shadow-xl hover:shadow-blue-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <ShoppingBag className="w-4 h-4" />
            <span className="relative z-10">Visit Shop</span>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="mb-8 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Excellence in Bangladesh</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter max-w-5xl">
            Empowering Industries <br/>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Through Innovation.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl font-medium leading-relaxed">
            Ozysa Ltd. is a premier conglomerate driving growth in Digital Solutions, E-commerce, Manufacturing, and Global Trade.
          </p>
        </section>

        {/* Digital Solutions Section */}
        <section id="digital" className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Digital Solutions</h2>
              <p className="text-xl text-slate-600">Cutting-edge technology for modern businesses</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <Monitor className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-black text-slate-900 mb-4">Web & App Development</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Custom web applications and mobile solutions built with modern technologies like React, Node.js, and cloud platforms.
                </p>
                <a
                  href="https://smart-village-pi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  <span>View Smart Gram</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <a
                  href="https://smart-village-pi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-black text-slate-900 mb-6 hover:text-blue-600 transition-colors inline-block"
                >
                  Smart Gram Case Study
                </a>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Experience our flagship rural empowerment platform that connects farmers, artisans, and businesses.
                </p>
                <div className="bg-slate-100 p-4 rounded-2xl">
                  <iframe
                    src="https://smart-village-pi.vercel.app"
                    className="w-full h-64 rounded-xl border-0"
                    title="Smart Gram Live Preview"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Trade & Logistics Section */}
        <section id="trade" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Global Trade & Logistics</h2>
              <p className="text-xl text-slate-600">Connecting Bangladesh to the world</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl text-center"
              >
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Import/Export</h3>
                <p className="text-slate-600">Comprehensive trade facilitation services connecting local businesses with global markets</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl text-center"
              >
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Supply Chain</h3>
                <p className="text-slate-600">End-to-end supply chain management and transportation solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-3xl text-center"
              >
                <ShoppingBag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">General Trading</h3>
                <p className="text-slate-600">Diverse product categories and trading opportunities</p>
              </motion.div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setCurrentView('global-trade')}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <span>Explore Trade Services</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Agro & Industry Section */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Agro & Industry</h2>
              <p className="text-xl text-slate-600">Sustainable manufacturing and agricultural solutions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl text-center shadow-lg"
              >
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Food Processing</h3>
                <p className="text-slate-600">Advanced food processing technologies and quality control systems</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl text-center shadow-lg"
              >
                <Cpu className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Electrical Manufacturing</h3>
                <p className="text-slate-600">High-quality electrical components and manufacturing solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl text-center shadow-lg"
              >
                <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Solar Energy</h3>
                <p className="text-slate-600">Renewable energy solutions and solar power projects</p>
              </motion.div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setCurrentView('agro-industry')}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                <span>Explore Industry Solutions</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-slate-600">Let's discuss your next project</p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-slate-50 p-8 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Digital Solutions</option>
                  <option>Global Trade</option>
                  <option>Agro Industry</option>
                  <option>Strategic Advisory</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {formStatus === 'idle' && 'Send Message'}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-lg italic">O</span>
                </div>
                <span className="text-xl font-bold tracking-tighter">OZYSA LTD</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering industries through innovation and excellence in Bangladesh.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Digital Solutions</li>
                <li>Global Trade</li>
                <li>Agro Industry</li>
                <li>Manufacturing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><a href="#digital" className="hover:text-blue-400 transition-colors">Digital</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
              <a
                href={SHOP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Shop
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8">
              <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3 h-3" />
                <span>Corporate Disclaimer</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ozysa Ltd. operates under strict regulatory compliance and government permissions as per its Memorandum of Association.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs">
              <p>&copy; {new Date().getFullYear()} Ozysa Ltd. All Rights Reserved.</p>
              <p className="mt-2 md:mt-0">Strategic Development by Ozysa IT</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Detail Views */}
      {currentView === 'smart-gram' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-900">Smart Gram Case Study</h3>
              <button
                onClick={() => setCurrentView('home')}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <iframe
                src="https://smart-village-pi.vercel.app"
                className="w-full h-96 rounded-xl border-0"
                title="Smart Gram Full View"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {currentView === 'global-trade' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-900">Global Trade Services</h3>
              <button
                onClick={() => setCurrentView('home')}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">Detailed information about our global trade and logistics services will be available soon.</p>
            </div>
          </div>
        </div>
      )}

      {currentView === 'agro-industry' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-2xl font-black text-slate-900">Agro Industry Solutions</h3>
              <button
                onClick={() => setCurrentView('home')}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">Detailed information about our agro industry and manufacturing solutions will be available soon.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;