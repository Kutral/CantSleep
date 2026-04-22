import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowLeft, Share2, Twitter, Facebook, Download, ArrowRight } from 'lucide-react';
import { getBlogPostBySlug, blogPosts, type BlogPost } from './blogData';

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = getBlogPostBySlug(slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = blogPosts.filter(
      (p: BlogPost) => p.category === post.category && p.slug !== post.slug
    );
    const pool = sameCategory.length > 0 ? sameCategory : blogPosts.filter((p: BlogPost) => p.slug !== post.slug);
    return pool.sort(() => Math.random() - 0.5).slice(0, 3);
  }, [post]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/CantSleep/#blog-${slug}`;
    navigator.clipboard.writeText(url).catch(() => {});
  };

  const handleShareTwitter = () => {
    if (!post) return;
    const url = `${window.location.origin}/CantSleep/#blog-${slug}`;
    const text = encodeURIComponent(`${post.title} — Can't Sleep Blog`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = () => {
    if (!post) return;
    const url = `${window.location.origin}/CantSleep/#blog-${slug}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  if (!post) {
    return (
      <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">Post Not Found</h1>
          <p className="text-slate-400 text-lg mb-8">The article you're looking for doesn't exist.</p>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-[1.03] active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10 min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <a
          href="#blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium mb-8 sm:mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </a>

        {/* Article Header */}
        <header className="mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20 mb-4 sm:mb-6">
            {post.category}
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-400 mb-6">
            <span className="font-medium text-slate-300">{post.author}</span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">{post.description}</p>
        </header>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-white/5">
          <span className="text-sm text-slate-500 font-medium">Share:</span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Copy Link
          </button>
          <button
            onClick={handleShareTwitter}
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <Twitter className="w-4 h-4" />
            Share on Twitter
          </button>
          <button
            onClick={handleShareFacebook}
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Share on Facebook
          </button>
        </div>

        {/* Article Body */}
        <article className="blog-content mb-16 sm:mb-20">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 sm:mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related: BlogPost) => (
                <a
                  key={related.slug}
                  href={`#blog-${related.slug}`}
                  className="block h-full glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20 mb-3">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {related.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA Bar */}
        <div className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4">
            Struggling to sleep?
          </h3>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Try the Can't Sleep app for science-backed techniques, calming sounds, and guided breathing exercises.
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
      </div>
    </motion.div>
  );
}
