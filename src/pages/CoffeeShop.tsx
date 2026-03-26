import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Coffee, 
  Star, 
  ChevronRight, 
  Calendar, 
  Users, 
  Utensils, 
  Info, 
  X, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';

const MENU_DATA = [
  {
    category: 'Breakfast',
    items: [
      { name: "Vera's Traditional Breakfast", desc: 'Local sausages, bacon, free range eggs, mushrooms, tomatoes & toast.', price: '£11.95' },
      { name: 'Avocado on Sourdough', desc: 'Smashed avocado, poached eggs, chili flakes & lime.', price: '£8.50' },
      { name: 'Homestyle Pancakes', desc: 'With blueberry compote or crispy bacon & maple syrup.', price: '£7.95' },
    ]
  },
  {
    category: 'Lunch Highlights',
    items: [
      { name: 'Norfolk Beef Burger', desc: 'Handmade patty, local cheddar, brioche bun & hand-cut chips.', price: '£14.50' },
      { name: 'Fresh Catch of the Day', desc: 'Local fish, garden peas, tartare sauce & seasonal greens.', price: '£13.95' },
      { name: 'Seasonal Vegetable Tart', desc: 'Made with nursery fresh herbs and vegetables.', price: '£11.50' },
    ]
  },
  {
    category: 'Cream Tea',
    items: [
      { name: "Signature Norfolk Scone", desc: 'Homemade fruit scone, clotted cream & Stalham strawberry jam.', price: '£5.50' },
      { name: 'Afternoon Tea for Two', desc: 'Selection of finger sandwiches, cakes & bottomless tea.', price: '£28.00' },
    ]
  }
];

const CoffeeShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'searching' | 'success'>('idle');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('searching');
    setTimeout(() => {
      setBookingStatus('success');
    }, 2000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-farm-green/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 bg-farm-gold text-farm-green text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Vera's Coffee Shop
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-farm-cream mb-6">Heart of the <span className="italic text-farm-gold">Farm</span></h1>
            <p className="text-xl text-farm-cream/90 max-w-2xl mx-auto leading-relaxed">
              Named after our matriarch, Vera's is where fresh ingredients meet home-style cooking. Fully licensed and full table service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serving Times */}
      <section className="py-12 bg-farm-earth text-farm-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-farm-gold/20 rounded-full flex items-center justify-center text-farm-gold"><Star className="w-6 h-6" /></div>
              <div>
                <p className="text-xs uppercase font-bold opacity-60">Breakfast</p>
                <p className="text-lg font-serif">9:30am – 11:30am</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-farm-gold/20 rounded-full flex items-center justify-center text-farm-gold"><Utensils className="w-6 h-6" /></div>
              <div>
                <p className="text-xs uppercase font-bold opacity-60">Lunch</p>
                <p className="text-lg font-serif">12:00pm – 2:30pm</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-farm-gold/20 rounded-full flex items-center justify-center text-farm-gold"><Coffee className="w-6 h-6" /></div>
              <div>
                <p className="text-xs uppercase font-bold opacity-60">Afternoon Tea</p>
                <p className="text-lg font-serif">From 2:30pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
             <h2 className="text-4xl md:text-5xl font-serif text-farm-green mb-8">Home-baked <br /><span className="italic text-farm-earth">with Love</span></h2>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Every morning, the aroma of fresh baking fills our kitchen. From our signature Norfolk scones to our hearty lunches, everything is prepared using the finest local ingredients.
             </p>
             <div className="space-y-6 mb-10">
               <div className="flex gap-4 p-4 rounded-3xl bg-farm-cream/30 border border-farm-cream items-start">
                  <div className="w-10 h-10 bg-farm-green rounded-2xl flex items-center justify-center text-farm-cream shrink-0"><Info className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-farm-green">Fully Licensed</h4>
                    <p className="text-sm text-gray-500">Enjoy a local ale or a crisp glass of wine with your lunch.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 rounded-3xl bg-farm-cream/30 border border-farm-cream items-start">
                  <div className="w-10 h-10 bg-farm-green rounded-2xl flex items-center justify-center text-farm-cream shrink-0"><Users className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-farm-green">Table Service</h4>
                    <p className="text-sm text-gray-500">Relax and let us take care of you. Full table service throughout the cafe.</p>
                  </div>
               </div>
             </div>
             <button onClick={() => setIsMenuOpen(true)} className="btn-primary px-10 py-4">View Menu</button>
          </div>

          <div className="glass-card p-10 bg-farm-cream/20 shadow-xl border-gray-100 rounded-[2.5rem]">
             <div className="text-center mb-10">
                <h3 className="text-3xl font-serif text-farm-green mb-2">Book a Table</h3>
                <p className="text-gray-500 text-sm">Reservations recommended, especially for Afternoon Tea.</p>
             </div>
             
             {bookingStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-serif text-farm-green mb-2">Table Reserved!</h4>
                  <p className="text-gray-500 mb-8">We've sent a confirmation to your email. See you at Vera's!</p>
                  <button onClick={() => setBookingStatus('idle')} className="text-farm-gold font-bold underline">Make another booking</button>
                </motion.div>
             ) : (
                <form className="space-y-6" onSubmit={handleBooking}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-400">Date</label>
                      <input required type="date" className="w-full p-4 rounded-2xl border border-gray-100 outline-none focus:ring-2 focus:ring-farm-gold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-gray-400">Guests</label>
                      <select className="w-full p-4 rounded-2xl border border-gray-100 outline-none focus:ring-2 focus:ring-farm-gold">
                        {[1,2,3,4,5,6,'7+'].map(n => <option key={n}>{n} People</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gray-400">Occasion</label>
                    <input type="text" placeholder="e.g. Birthday, Reunion" className="w-full p-4 rounded-2xl border border-gray-100 outline-none focus:ring-2 focus:ring-farm-gold" />
                  </div>
                  <button 
                    disabled={bookingStatus === 'searching'}
                    className="btn-primary w-full py-5 text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    {bookingStatus === 'searching' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Checking Availability...
                      </>
                    ) : 'Check Availability'}
                  </button>
                </form>
             )}
             <p className="text-center text-[10px] text-gray-400 mt-6">For same-day bookings or groups larger than 6, please call us on 01692 580226.</p>
          </div>
        </div>
      </section>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-farm-green/40 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-farm-cream w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
               <div className="p-8 border-b border-farm-gold/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coffee className="text-farm-gold" />
                    <h2 className="text-3xl font-serif text-farm-green">Vera's Menu</h2>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-farm-green/5 rounded-full transition-colors"><X/></button>
               </div>
               
               <div className="p-8 overflow-y-auto space-y-12">
                  {MENU_DATA.map((cat) => (
                    <div key={cat.category}>
                      <h3 className="text-farm-gold font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-4">
                        {cat.category}
                        <div className="h-px bg-farm-gold/20 flex-grow"></div>
                      </h3>
                      <div className="space-y-8">
                        {cat.items.map(item => (
                          <div key={item.name} className="flex justify-between gap-8 group">
                            <div className="max-w-md">
                              <h4 className="text-xl font-bold text-farm-green mb-1 group-hover:text-farm-earth transition-colors">{item.name}</h4>
                              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                            <span className="text-lg font-serif font-bold text-farm-green">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
               </div>
               
               <div className="p-8 bg-white/50 border-t border-farm-gold/10 flex justify-between items-center text-xs text-gray-400">
                  <p>All prices include VAT. Please ask about allergens.</p>
                  <p>Local • Fresh • Norfolk</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Events Widget */}
      <section className="py-24 bg-farm-green/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-farm-green mb-4">What's On</h2>
             <p className="text-gray-600">Join us for special tasting events, seasonal fairs, and more at Vera's.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-24 h-24 bg-farm-gold/20 rounded-3xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-farm-green font-bold text-2xl">12</span>
                    <span className="text-[10px] uppercase font-bold opacity-60">April</span>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-farm-green mb-2">Artisan Bread Tasting</h4>
                    <p className="text-sm text-gray-500 mb-4">Sample the newest additions to our bakery lineup with local butter pairings.</p>
                    <button className="text-farm-gold font-bold text-sm flex items-center gap-1 hover:translate-x-1 transition-transform">Learn More <ChevronRight className="w-4 h-4" /></button>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-24 h-24 bg-farm-green/10 rounded-3xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-farm-green font-bold text-2xl">05</span>
                    <span className="text-[10px] uppercase font-bold opacity-60">May</span>
                 </div>
                 <div>
                    <h4 className="text-xl font-bold text-farm-green mb-2">Spring Plant Fair</h4>
                    <p className="text-sm text-gray-500 mb-4">A celebration of our nursery's spring stock with expert gardener workshops.</p>
                    <button className="text-farm-gold font-bold text-sm flex items-center gap-1 hover:translate-x-1 transition-transform">Learn More <ChevronRight className="w-4 h-4" /></button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeShop;
