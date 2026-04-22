import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Clock, Calendar, Download, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories, type BlogPost } from './blogData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post: BlogPost) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.keywords.some((k) => k.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6"
          >
            Sleep Better Blog
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
          >
            Science-backed insights to help you fall asleep faster and wake up refreshed.
          </motion.p>

          {/* Search */}
          <motion.div variants={fadeUp} className="relative max-w-xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-full bg-sleep-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm sm:text-base"
            />
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 justify-start sm:justify-center no-scrollbar"
          >
            <button
              onClick={() => setActiveCategory('All')}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === 'All'
                  ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : 'bg-sleep-800 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-300'
              }`}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                    : 'bg-sleep-800 text-slate-400 border-white/10 hover:border-white/20 hover:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredPosts.map((post: BlogPost) => (
              <motion.article key={post.slug} variants={fadeUp}>
                <a
                  href={`#blog-${post.slug}`}
                  className="block h-full glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedDate}
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-lg">
              No articles found. Try a different search term.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-20 sm:mt-24"
        >
          <div className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 text-center relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">
              Ready to sleep better?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Download the Can't Sleep app and access science-backed techniques, calming sounds, and guided breathing exercises tonight.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]"
              >
                <ArrowRight className="w-5 h-5 shrink-0" />
                <span>Open Web App</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.cantsleep.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>Get for Android</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
