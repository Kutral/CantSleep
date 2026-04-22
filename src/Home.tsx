import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Activity, 
  BookHeart, 
  Headphones, 
  Flame, 
  Sparkles,
  Play,
  HeartPulse,
  CheckCircle2,
  LockOpen,
  CloudRain,
  Wind,
  LineChart,
  MoonStar,
  Download
} from 'lucide-react';

// Animation variants
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-16 sm:pt-20">
        {/* User-requested exact video tag */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" type="video/mp4" /> 
        </video>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sleep-900/60 via-sleep-900/70 to-sleep-900 z-0"></div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel mb-6 sm:mb-8 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide uppercase border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Science-Backed Sleep Aid App</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.1] tracking-tight">
              Stop counting sheep.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300">
                {' '}Start sleeping better.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl md:leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-10 font-light px-2 sm:px-0">
              <strong>Can't Sleep</strong> is your science-backed sleep aid app designed to help you fall asleep fast when you just can't. Guiding you to deep, restful sleep with proven relaxation techniques, calming sounds, and immersive breathing exercises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a 
                href="https://play.google.com/store/apps/details?id=com.cantsleep.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>Download App Now</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center z-10"
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase mb-4 font-semibold">Discover More</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-indigo-500/0 via-indigo-400/50 to-indigo-500/0 animate-pulse"></div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-10">

        {/* Value Prop & Features Bento Grid */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 relative" id="features">
          {/* Background Glows */}
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto">
            <motion.header 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-16 sm:mb-24"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 tracking-tight">Designed for <span className="text-indigo-400">Real Sleeplessness</span></h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                Unlike meditation apps with 30-minute sessions, Can't Sleep is purpose-built for the moment you struggle to drift off. No clutter, no visual noise — just the science of falling asleep.
              </p>
            </motion.header>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {/* Rescue Mode Card - Span 2 */}
              <article>
                <motion.div variants={fadeUp} className="h-full glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:col-span-2 relative overflow-hidden group border border-white/10">
                  <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-rose-500/15 rounded-full blur-[60px] sm:blur-[80px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-rose-500/25 group-hover:scale-110"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-rose-500/20 flex items-center justify-center mb-6 sm:mb-8 text-rose-400 border border-rose-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                        <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                        Rescue Mode 
                        <span className="text-rose-400 text-xs sm:text-sm md:text-base align-middle font-medium bg-rose-500/10 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-rose-500/20 whitespace-nowrap">Anxiety Relief</span>
                      </h3>
                      <p className="text-slate-300 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg">
                        Awake at 3 AM with a racing mind? Rescue Mode is a guided 3-minute emergency session that walks you through clinical techniques back-to-back so you can fall asleep fast.
                      </p>
                    </div>
                    
                    <div className="mt-8 sm:mt-10 flex flex-wrap gap-2.5 sm:gap-4">
                      <div className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-sleep-800 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 shadow-lg">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] sm:text-xs text-rose-400 font-bold border border-rose-500/20 shrink-0">1</span>
                        <span>Physiological Sigh</span>
                      </div>
                      <div className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-sleep-800 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 shadow-lg">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] sm:text-xs text-rose-400 font-bold border border-rose-500/20 shrink-0">2</span>
                        <span>Cognitive Shuffle</span>
                      </div>
                      <div className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-sleep-800 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 shadow-lg">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] sm:text-xs text-rose-400 font-bold border border-rose-500/20 shrink-0">3</span>
                        <span>Box Breathing</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Extensive Techniques */}
              <article>
                <motion.div variants={fadeUp} className="h-full glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/15 rounded-full blur-[60px] sm:blur-[80px] -mr-10 -mb-10 transition-all duration-700 group-hover:bg-indigo-500/25 group-hover:scale-110"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 sm:mb-8 text-indigo-400 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      <Brain className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4">Guided Techniques</h3>
                    <p className="text-slate-300 leading-relaxed max-w-xl text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                      Wide awake? We guide you through clinically-backed techniques chosen for how you feel right now.
                    </p>
                    <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300 font-medium mt-auto">
                      <li className="flex items-start gap-2.5 sm:gap-3 group/item cursor-default">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" /> 
                        <span className="leading-snug"><strong>4-7-8 Breathing:</strong> Calm your nervous system in under 60 seconds</span>
                      </li>
                      <li className="flex items-start gap-2.5 sm:gap-3 group/item cursor-default">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" /> 
                        <span className="leading-snug"><strong>Cognitive Shuffle:</strong> Scramble thoughts to break the worry loop</span>
                      </li>
                      <li className="flex items-start gap-2.5 sm:gap-3 group/item cursor-default">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" /> 
                        <span className="leading-snug"><strong>PMR:</strong> Release physical tension from head to toe</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </article>

              {/* Soundscape Mixer */}
              <article>
                <motion.div variants={fadeUp} className="h-full glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group lg:col-span-1 border border-white/10">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent transition-all group-hover:from-cyan-500/10"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 sm:mb-8 text-cyan-400 border border-cyan-500/30 shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4">Sleep Sounds & Soundscapes</h3>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                      Drift off with white, brown, and pink noise, binaural beats, and immersive nature audio. <strong>Blend up to 3 layers</strong> to create your perfect setup.
                    </p>
                    
                    {/* Visual Mixer Elements */}
                    <div className="space-y-4 sm:space-y-5 pt-5 sm:pt-6 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-3 sm:gap-4 group/slider cursor-pointer">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 shadow-inner group-hover/slider:bg-cyan-500/20 transition-colors">
                          <CloudRain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                        </div>
                        <div className="h-1.5 sm:h-2 flex-1 bg-sleep-800 rounded-full overflow-visible border border-white/5 relative">
                          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500/30 to-cyan-400 w-[75%] rounded-full shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-700">
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg border border-cyan-200 hover:scale-125 transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:gap-4 group/slider cursor-pointer">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 shadow-inner group-hover/slider:bg-orange-500/20 transition-colors">
                          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                        </div>
                        <div className="h-1.5 sm:h-2 flex-1 bg-sleep-800 rounded-full overflow-visible border border-white/5 relative">
                          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500/30 to-orange-400 w-[45%] rounded-full shadow-[0_0_15px_rgba(251,146,60,0.4)] transition-all duration-700">
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg border border-orange-200 hover:scale-125 transition-transform"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 sm:gap-4 group/slider cursor-pointer">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 shadow-inner group-hover/slider:bg-indigo-500/20 transition-colors">
                          <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
                        </div>
                        <div className="h-1.5 sm:h-2 flex-1 bg-sleep-800 rounded-full overflow-visible border border-white/5 relative">
                          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500/30 to-indigo-400 w-[90%] rounded-full shadow-[0_0_15px_rgba(129,140,248,0.4)] transition-all duration-700">
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg border border-indigo-200 hover:scale-125 transition-transform"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Reflection & Tracking */}
              <article className="lg:col-span-2">
                <motion.div variants={fadeUp} className="h-full glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px] transition-all duration-700 group-hover:bg-purple-500/10 group-hover:scale-105"></div>
                  <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center h-full">
                    <div className="flex-1 w-full text-center lg:text-left">
                      <div className="mx-auto lg:mx-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 sm:mb-8 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        <LineChart className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4">Sleep Journal & Insights</h3>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-xl">
                        Track your sleep habits and emotional patterns over time. Log how you feel, view technique effectiveness metrics, and discover weekly trends.
                      </p>
                      <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300 font-medium inline-block text-left">
                        <li className="flex items-center gap-2.5 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Morning reflection prompts</li>
                        <li className="flex items-center gap-2.5 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Build a consistent bedtime routine</li>
                      </ul>
                    </div>
                    
                    <div className="w-full lg:w-[50%] grid grid-cols-2 gap-3 sm:gap-4 shrink-0 mt-2 lg:mt-0">
                      <div className="bg-sleep-800/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center shadow-lg hover:border-pink-500/30 transition-colors cursor-default">
                        <BookHeart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(244,114,182,0.4)]" />
                        <span className="font-semibold text-slate-200 text-xs sm:text-sm">Mood Tracking</span>
                      </div>
                      <div className="bg-sleep-800/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/30 transition-colors cursor-default">
                        <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
                        <span className="font-semibold text-slate-200 text-xs sm:text-sm">Sleep Stats</span>
                      </div>
                      <div className="bg-sleep-800/80 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center col-span-2 shadow-lg hover:border-orange-500/30 transition-colors cursor-default">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                           <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.4)]" />
                           <span className="text-2xl sm:text-3xl font-display font-bold">14 Day</span>
                        </div>
                        <span className="font-medium text-slate-400 text-xs sm:text-sm">Current Sleep Streak</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </article>

            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 sm:py-32 relative px-4 sm:px-6 bg-sleep-800/40 border-t border-white/5" id="pricing">
          <div className="max-w-7xl mx-auto">
            <motion.header 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 tracking-tight">Flexible Premium Plans</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                Start your 7-day free trial tonight and experience the difference science-backed techniques make. Or access Pro features for free daily.
              </p>
            </motion.header>

            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={staggerContainer}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 max-w-5xl mx-auto"
            >
              {/* Monthly */}
              <motion.article variants={fadeUp} className="glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col">
                <h3 className="text-lg sm:text-xl font-medium text-slate-400 mb-2">Monthly</h3>
                <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-display font-bold">₹100</span>
                  <span className="text-slate-400 font-medium text-sm sm:text-base">/mo</span>
                </div>
                <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1 font-medium text-sm sm:text-base">
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">All sleep techniques</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">Rescue Mode</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">Unlimited soundscapes</span></li>
                </ul>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cantsleep.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition-all text-sm sm:text-base hover:scale-[1.02] font-bold border border-white/10 text-center block"
                >
                  Start 7-Day Free Trial
                </a>
              </motion.article>

              {/* Annual */}
              <motion.article variants={fadeUp} className="glass-panel border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.15)] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col relative transform md:-translate-y-4 lg:-translate-y-6 hover:-translate-y-2 lg:hover:-translate-y-8 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 sm:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-indigo-300 mb-2">Annual</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-display font-bold">₹500</span>
                  <span className="text-slate-400 font-medium text-sm sm:text-base">/yr</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-400 mb-6 sm:mb-8 font-bold tracking-wide uppercase">Save over 55%</p>
                <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1 font-medium text-sm sm:text-base">
                   <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-200">All Pro features</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-200">Advanced sleep stats</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-200">Morning journaling</span></li>
                </ul>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cantsleep.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 sm:py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 active:scale-95 transition-all text-sm sm:text-base hover:scale-[1.03] font-bold text-white text-center block shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  Start 7-Day Free Trial
                </a>
              </motion.article>

              {/* Lifetime */}
              <motion.article variants={fadeUp} className="glass-panel glass-panel-hover rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 flex flex-col md:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-medium text-slate-400 mb-2">Lifetime</h3>
                <div className="flex items-baseline gap-1 mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-display font-bold">₹1000</span>
                </div>
                <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1 font-medium text-sm sm:text-base">
                   <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">Pay once, own forever</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">All future updates</span></li>
                  <li className="flex items-start gap-3 sm:gap-4"><CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" /> <span className="text-slate-300">Priority support</span></li>
                </ul>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.cantsleep.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition-all text-sm sm:text-base hover:scale-[1.02] font-bold border border-white/10 text-center block"
                >
                  Get Lifetime Link
                </a>
              </motion.article>
            </motion.div>

            {/* Ad-Supported Banner */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-5xl mx-auto"
            >
              <div className="glass-panel rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 overflow-hidden relative group text-center md:text-left">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent z-0 group-hover:from-emerald-500/10 transition-colors duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <LockOpen className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-3">Ad-Supported Free Tier</h4>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
                      Watch a single Rewarded Ad to unlock <span className="text-emerald-300 font-bold">1 hour of full, unrestricted Pro access</span> to all features before bed.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.cantsleep.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full md:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 active:scale-95 transition-all text-sm sm:text-base font-bold whitespace-nowrap inline-block text-center hover:scale-105"
                  >
                    Try App Free
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </>
  );
}
