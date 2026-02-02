import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Mail } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Technology', 'Global Trade', 'Agro-Industry', 'Company Updates'];

  const featuredPost = {
    id: 1,
    title: 'The Future of Smart Gram in Rural Bangladesh',
    excerpt: 'Exploring how innovative agricultural technology is transforming rural communities and boosting economic growth across Bangladesh.',
    image: '/api/placeholder/800/400',
    date: '2024-01-15',
    author: 'Ozysa Team',
    category: 'Technology',
    readTime: '5 min read'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Sustainable Global Trade Practices',
      excerpt: 'How Ozysa Ltd. is leading the way in environmentally conscious international trade and supply chain management.',
      image: '/api/placeholder/400/250',
      date: '2024-01-10',
      author: 'Md. Elius Miah',
      category: 'Global Trade',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Digital Transformation in Agriculture',
      excerpt: 'Revolutionizing farming techniques with cutting-edge technology and data-driven solutions.',
      image: '/api/placeholder/400/250',
      date: '2024-01-08',
      author: 'Ozysa Team',
      category: 'Agro-Industry',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Q4 2023 Company Achievements',
      excerpt: 'Celebrating our milestones and looking forward to continued growth and innovation.',
      image: '/api/placeholder/400/250',
      date: '2024-01-05',
      author: 'Ozysa Team',
      category: 'Company Updates',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'AI-Powered Supply Chain Optimization',
      excerpt: 'How artificial intelligence is streamlining our global logistics and improving efficiency.',
      image: '/api/placeholder/400/250',
      date: '2024-01-03',
      author: 'Ozysa Team',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Expanding Market Reach in Southeast Asia',
      excerpt: 'Strategic partnerships and market expansion initiatives driving regional growth.',
      image: '/api/placeholder/400/250',
      date: '2023-12-28',
      author: 'Md. Elius Miah',
      category: 'Global Trade',
      readTime: '5 min read'
    },
    {
      id: 7,
      title: 'Climate-Smart Agriculture Solutions',
      excerpt: 'Innovative approaches to sustainable farming that address climate change challenges.',
      image: '/api/placeholder/400/250',
      date: '2023-12-25',
      author: 'Ozysa Team',
      category: 'Agro-Industry',
      readTime: '6 min read'
    }
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const searchedPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Ozysa <span className="text-blue-600">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto"
          >
            Stay informed with the latest insights, innovations, and updates from Ozysa Ltd.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto relative"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-blue-100">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 text-center mb-16"
          >
            Latest Articles
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-black mb-6">Stay Updated with Ozysa</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Get the latest insights, industry trends, and company updates delivered directly to your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;