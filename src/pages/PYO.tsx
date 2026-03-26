import React from 'react';
import { motion } from 'motion/react';
import { Pickaxe, Clock, Info, CheckCircle2, ChevronRight, MapPin, Calendar, Smartphone } from 'lucide-react';

const SEASONAL_ITEMS = [
  { id: '1', name: 'Strawberries', status: 'picking', month: 'June - Aug', image: '/assets/fresh_strawberries_norfolk_1774531286468.png' },
  { id: '2', name: 'Asparagus', status: 'picking', month: 'May - June', image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Tomatoes', status: 'picking', month: 'July - Sept', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Pumpkins', status: 'coming-soon', month: 'Oct', image: '/assets/giant_pumpkins_norfolk_farm_1774531369739.png' },
  { id: '5', name: 'Raspberries', status: 'coming-soon', month: 'July - Aug', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Apples', status: 'coming-soon', month: 'Sept - Oct', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=400' },
];

const PYO = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-serif text-farm-green mb-6">Pick Your Own <br /><span className="italic text-farm-gold">Fresh Fields</span></h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            There's nothing quite like picking your own fruit and vegetables on a sunny day. Our fields are open seasonally for you to enjoy the freshest flavors Stalham has to offer.
          </p>
        </div>

        {/* Status Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           <div className="bg-green-50 border border-green-100 p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm"><CheckCircle2 className="w-6 h-6" /></div>
              <div><p className="text-xs font-bold uppercase opacity-50">Status</p> <p className="font-bold text-green-700">Open Daily</p></div>
           </div>
           <div className="bg-farm-cream border border-farm-gold/10 p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-farm-gold shadow-sm"><Calendar className="w-6 h-6" /></div>
              <div><p className="text-xs font-bold uppercase opacity-50">Season</p> <p className="font-bold text-farm-green">May – October</p></div>
           </div>
           <div className="bg-farm-cream border border-farm-gold/10 p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-farm-gold shadow-sm"><Pickaxe className="w-6 h-6" /></div>
              <div><p className="text-xs font-bold uppercase opacity-50">Equipment</p> <p className="font-bold text-farm-green">Punnets Provided</p></div>
           </div>
           <div className="bg-farm-cream border border-farm-gold/10 p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-farm-gold shadow-sm"><Smartphone className="w-6 h-6" /></div>
              <div><p className="text-xs font-bold uppercase opacity-50">Updates</p> <p className="font-bold text-farm-green">Check App Live</p></div>
           </div>
        </div>

        {/* PYO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SEASONAL_ITEMS.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="group bg-farm-cream/10 rounded-3xl overflow-hidden border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-farm-green">{item.name}</h3>
                  <span className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-full ${item.status === 'picking' ? 'bg-green-100 text-green-700' : 'bg-farm-gold/20 text-farm-earth'}`}>
                    {item.status === 'picking' ? 'Picking Now' : 'Coming Soon'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {item.month}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PYO Rules & Info */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="bg-farm-earth text-farm-cream p-12 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
              <h2 className="text-3xl font-serif mb-8 relative z-10">How it Works</h2>
              <div className="space-y-8 relative z-10">
                 {[
                  { title: 'No Booking Required', desc: 'Just turn up during our opening hours, no pre-booking necessary.' },
                  { title: 'Grab your Punnet', desc: 'Pick up pails or punnets at the field entrance before you start.' },
                  { title: 'Pay for your Picking', desc: 'Pricing is based on weight. Please pay for everything you pick.' },
                  { title: 'Supervise Children', desc: 'The farm is a working environment, please keep children close at all times.' }
                 ].map((rule, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-farm-gold shrink-0">{i+1}</div>
                      <div>
                        <h4 className="font-bold mb-1">{rule.title}</h4>
                        <p className="text-sm opacity-60 leading-relaxed">{rule.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div>
              <div className="flex items-center gap-3 text-farm-gold font-bold uppercase tracking-widest text-sm mb-6"><Info className="w-4 h-4" /> Location Info</div>
              <h2 className="text-4xl font-serif text-farm-green mb-8">Where to <span className="italic">Find Us</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Pick Your Own fields are located directly behind the main Farm Shop and Nursery. Please follow the signs for the "PYO Paddock" upon entry.
              </p>
              <div className="bg-farm-cream/30 p-8 rounded-3xl border border-farm-cream flex items-center gap-6">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-farm-green shadow-sm shrink-0"><MapPin className="w-8 h-8" /></div>
                 <div>
                    <h4 className="font-bold text-farm-green">The PYO Paddock</h4>
                    <p className="text-sm text-gray-500">Wayford Nurseries, NR12 9LJ</p>
                    <button className="text-farm-gold font-bold text-sm mt-2 flex items-center gap-1">Get Directions <ChevronRight className="w-4 h-4" /></button>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default PYO;
