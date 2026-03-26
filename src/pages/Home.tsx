import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Smartphone, Pickaxe, Coffee, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEASONAL_HIGHLIGHTS = [
  { id: '1', name: 'Strawberries', status: 'picking', month: 'June - Aug', image: '/assets/fresh_strawberries_norfolk_1774531286468.png' },
  { id: '2', name: 'Asparagus', status: 'picking', month: 'May - June', image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Tomatoes', status: 'picking', month: 'July - Sept', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400' },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farm landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-farm-green/80 via-farm-green/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-farm-cream"
          >
            <span className="inline-block px-4 py-1 bg-farm-gold text-farm-green text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Welcome to Stallington
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-[1.1]">
              Fresh from our <br />
              <span className="text-farm-gold italic">Family</span> to yours.
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-lg leading-relaxed">
              Growing quality produce in the heart of Norfolk since the 1930s. Visit our farm shop, nursery, and coffee shop today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-secondary flex items-center gap-2">
                Order Online <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all">
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Live Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-farm-earth text-farm-cream py-3 overflow-hidden border-t border-white/10">
          <div className="flex whitespace-nowrap animate-marquee items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  LIVE FROM THE FARM:
                </span>
                <span className="text-sm opacity-80">Strawberries: In Season</span>
                <span className="text-farm-gold">•</span>
                <span className="text-sm opacity-80">Current Temp: 18°C</span>
                <span className="text-farm-gold">•</span>
                <span className="text-sm opacity-80">Asparagus: Limited Availability</span>
                <span className="text-farm-gold">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-farm-green mb-4">Picking Now</h2>
              <p className="text-gray-600">The very best of Norfolk's seasonal produce, straight from our fields to your basket.</p>
            </div>
            <Link to="/pyo" className="text-farm-green font-bold flex items-center gap-2 hover:text-farm-gold transition-colors">
              View Full Calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SEASONAL_HIGHLIGHTS.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 bg-farm-cream/30"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-farm-green">{item.name}</h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Picking Now</span>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {item.month}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-24 bg-farm-green text-farm-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-farm-gold/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Rooted in <br /><span className="text-farm-gold italic">History</span></h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-lg">
              Since the 1930s, the Meale family has been farming the fertile soils of Norfolk. What started as simple market gardening has grown into a beloved destination.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <span className="text-4xl font-serif text-farm-gold block mb-2">90+</span>
                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Years of Heritage</span>
              </div>
              <div>
                <span className="text-4xl font-serif text-farm-gold block mb-2">100%</span>
                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Local Focus</span>
              </div>
            </div>
            <Link to="/contact" className="btn-secondary inline-block">Learn Our Story</Link>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
               <img src="/assets/norfolk_farm_heritage_1930s_1774531311000.png" alt="Farm history" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-farm-gold rounded-full flex items-center justify-center text-farm-green font-bold">M</div>
                 <div>
                   <p className="text-farm-green font-bold">A.G. Meale</p>
                   <p className="text-xs text-gray-400">Founded 1932</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mobile App Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="relative w-[300px] h-[600px] bg-farm-earth rounded-[3rem] border-[8px] border-farm-earth shadow-2xl overflow-hidden mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-farm-cream p-6">
                   <div className="flex justify-between items-center mb-8">
                     <div className="w-8 h-8 bg-farm-green rounded-lg flex items-center justify-center text-white text-xs font-bold">M</div>
                   </div>
                   <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
                      <span className="text-[10px] uppercase font-bold text-gray-400">Loyalty Balance</span>
                      <div className="flex justify-between items-end mt-1 font-serif text-2xl font-bold">1,240 <span className="text-xs text-farm-gold">pts</span></div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden"><div className="w-3/4 h-full bg-farm-gold"></div></div>
                   </div>
                   <h5 className="font-bold text-sm mb-4">Active Alerts</h5>
                   <div className="space-y-3">
                      <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex gap-3"><Pickaxe className="w-4 h-4 text-green-600" /> <span className="text-[10px] font-bold">Strawberries are READY!</span></div>
                      <div className="bg-farm-gold/10 border border-farm-gold/20 rounded-xl p-3 flex gap-3"><Coffee className="w-4 h-4 text-farm-gold" /> <span className="text-[10px] font-bold">2-for-1 Scones Today</span></div>
                   </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-farm-earth rounded-b-2xl"></div>
             </div>
           </div>
           <div className="order-1 lg:order-2">
             <h2 className="text-4xl md:text-6xl font-serif text-farm-green mb-8">Meale’s in <br /><span className="text-farm-gold italic">Your Pocket</span></h2>
             <p className="text-lg text-gray-600 mb-10 leading-relaxed">
               Download our app for instant PYO alerts, loyalty rewards on coffee, and exclusive farm shop offers.
             </p>
             <div className="flex gap-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
