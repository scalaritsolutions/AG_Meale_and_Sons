import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower2, Sun, Cloud, Bug, ChevronRight, Info, Search } from 'lucide-react';

const PLANTS = [
  { id: '1', name: 'Lavender', category: 'Sun', description: 'Fragrant and attracts bees.', image: '/assets/lavender_plant_nursery_1774531350838.png' },
  { id: '2', name: 'Ferns', category: 'Shade', description: 'Lush greenery for cool spots.', image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Foxgloves', category: 'Pollinator', description: 'Tall, majestic and bee-friendly.', image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Hostas', category: 'Shade', description: 'Beautiful foliage for shade.', image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Sunflowers', category: 'Sun', description: 'Bright, tall and cheerful.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Buddleia', category: 'Pollinator', description: 'The butterfly bush.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=400' },
];

const Nursery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Shade', 'Sun', 'Pollinator'];

  const filteredPlants = filter === 'All' ? PLANTS : PLANTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif text-farm-green mb-4">Plant Nursery</h1>
            <p className="text-gray-600 font-medium">From garden classics to seasonal specialties, our nursery is curated for Norfolk's unique climate.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all border ${filter === cat ? 'bg-farm-green text-farm-cream border-farm-green shadow-lg' : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredPlants.map((plant) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={plant.id}
                className="group bg-farm-cream/10 rounded-[2.5rem] overflow-hidden border border-gray-50 flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={plant.image} alt={plant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/95 backdrop-blur-sm shadow-sm text-farm-green text-[10px] font-bold uppercase px-4 py-1.5 rounded-full border border-gray-100">
                      {plant.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-farm-green mb-3">{plant.name}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">{plant.description}</p>
                  
                  <div className="mt-auto grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                     <div className="flex flex-col items-center gap-1">
                        <Sun className={`w-5 h-5 ${plant.category === 'Sun' ? 'text-farm-gold' : 'text-gray-200'}`} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Sun</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <Cloud className={`w-5 h-5 ${plant.category === 'Shade' ? 'text-blue-200' : 'text-gray-200'}`} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Shade</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <Bug className={`w-5 h-5 ${plant.category === 'Pollinator' ? 'text-green-300' : 'text-gray-200'}`} />
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Life</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Care Tips Section */}
        <section className="mt-24 bg-farm-green rounded-[3rem] p-12 text-farm-cream overflow-hidden relative">
           <div className="absolute bottom-0 right-0 w-80 h-80 bg-farm-gold/10 rounded-full blur-3xl -mb-40 -mr-40"></div>
           <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-farm-gold text-xs font-bold uppercase tracking-widest block mb-4">Gardeners' Corner</span>
                 <h2 className="text-4xl font-serif mb-6">Expert Advice <br /><span className="italic">at Your Fingertips</span></h2>
                 <p className="opacity-80 mb-8 leading-relaxed">
                   Not sure what grows best in your garden? Our nursery team is here to help. We've been growing in Stalham for generations and know exactly what works.
                 </p>
                 <div className="space-y-4">
                    {['Soil Testing Kits', 'Seasonal Planting Guides', 'Custom Potting Service'].map(svc => (
                      <div key={svc} className="flex items-center gap-3 font-medium">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-farm-gold"><ChevronRight className="w-3 h-3" /></div>
                        {svc}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                 <h4 className="font-bold flex items-center gap-2 mb-4"><Info className="text-farm-gold" /> Nursery Opening Hours</h4>
                 <div className="space-y-3 opacity-80 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Monday – Saturday</span> <span>8:30am – 5:30pm</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Sunday</span> <span>10:00am – 4:00pm</span></div>
                 </div>
                 <p className="mt-6 text-xs italic opacity-60">Please note: Vera's Coffee Shop serving times differ from nursery hours.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Nursery;
