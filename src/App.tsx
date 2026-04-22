import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import Blog from './Blog';
import BlogPost from './BlogPost';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getBlogSlug = () => {
    if (currentHash.startsWith('#blog-')) return currentHash.replace('#blog-', '');
    return null;
  };

  return (
    <div className="min-h-screen bg-sleep-900 text-white selection:bg-indigo-500/30 overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-white/5 bg-sleep-900/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity z-10">
            <img src="./logo.png" alt="Can't Sleep Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
            <span className="font-display font-bold text-lg sm:text-xl tracking-wide">Can't Sleep</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.cantsleep.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-transform flex items-center gap-1.5 sm:gap-2 z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Get for Android</span>
            <span className="inline sm:hidden">Get App</span>
          </a>
        </div>
      </nav>

      {/* Main Content Area Routing */}
      <main>
        {currentHash === '#blog' ? (
          <Blog />
        ) : currentHash === '#privacy' ? (
          <PrivacyPolicy />
        ) : getBlogSlug() ? (
          <BlogPost slug={getBlogSlug()} />
        ) : (
          <Home />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-sleep-900 py-10 sm:py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-2.5">
            <img src="./logo.png" alt="Can't Sleep Logo" className="w-6 h-6 object-contain opacity-80" />
            <span className="font-display font-semibold text-lg tracking-wide text-slate-300">Can't Sleep</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Can't Sleep App. All rights reserved. Available for Android 10+.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-slate-500">
            <a href="#blog" className="hover:text-slate-300 transition-colors py-1">Blog</a>
            <a href="#privacy" className="hover:text-slate-300 transition-colors py-1">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors py-1">Terms</a>
            <a href="#" className="hover:text-slate-300 transition-colors py-1">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
