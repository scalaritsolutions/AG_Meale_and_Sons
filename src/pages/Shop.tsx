import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBasket, Search, Filter, ShoppingCart, CheckCircle2, MessageSquare, MapPin, Truck } from 'lucide-react';

const PRODUCTS = [
  { id: '1', name: 'Fresh Asparagus', category: 'Vegetables', price: '£3.50', unit: 'bunch', image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Farmhouse Butter', category: 'Dairy', price: '£2.80', unit: '250g', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Stalham Honey', category: 'Pantry', price: '£6.50', unit: 'jar', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400' },
  { id: '4', name: 'Norfolk New Potatoes', category: 'Vegetables', price: '£4.20', unit: '2kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400' },
  { id: '5', name: 'Local Free Range Eggs', category: 'Dairy', price: '£2.60', unit: '6 pk', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=400' },
  { id: '6', name: 'Homemade Raspberry Jam', category: 'Pantry', price: '£4.50', unit: 'jar', image: '/assets/artisan_raspberry_jam_jar_1774531330383.png' },
];

const Shop = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addToCart = (id: string) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
      setCart([]);
    }, 3000);
  };

  return (
    <div className="pt-32 pb-24 bg-farm-cream/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-5xl font-serif text-farm-green mb-4">Farm Shop</h1>
            <p className="text-gray-600">Request your fresh produce for local delivery or collection.</p>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center gap-3 bg-farm-green text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-farm-earth transition-all relative overflow-hidden group"
          >
            <ShoppingCart className="w-5 h-5" />
            View Request List
            <span className="bg-farm-gold text-farm-green w-6 h-6 rounded-full flex items-center justify-center text-xs ml-2 group-hover:scale-110 transition-transform">
              {cart.length}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-farm-gold tracking-widest">{product.category}</span>
                    <h3 className="text-xl font-bold text-farm-green">{product.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-farm-green">{product.price}</p>
                    <p className="text-xs text-gray-400">per {product.unit}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 flex gap-2">
                  {cart.includes(product.id) ? (
                    <button 
                      onClick={() => removeFromCart(product.id)}
                      className="w-full py-3 rounded-xl border border-farm-green/20 text-farm-green font-bold flex items-center justify-center gap-2 bg-farm-green/5"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Added to Request
                    </button>
                  ) : (
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="w-full py-3 rounded-xl bg-farm-cream text-farm-green font-bold flex items-center justify-center gap-2 hover:bg-farm-gold transition-all"
                    >
                      <ShoppingBasket className="w-4 h-4" /> Add to Request
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Request Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-farm-green/40 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                <div className="p-8 bg-farm-cream flex items-center justify-between">
                  <h2 className="text-2xl font-serif text-farm-green flex items-center gap-3">
                    <MessageSquare className="text-farm-gold" /> Order Request
                  </h2>
                  <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-farm-green ring-offset-2 focus:ring-2 focus:ring-farm-gold rounded-full p-2 transition-all">Close</button>
                </div>

                <div className="p-8 overflow-y-auto">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-serif text-farm-green mb-2">Request Received!</h3>
                      <p className="text-gray-500">We'll contact you shortly to confirm and process payment.</p>
                    </div>
                  ) : cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBasket className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                      <p className="text-gray-400 font-medium">Your request list is currently empty.</p>
                      <button onClick={() => setShowForm(false)} className="mt-6 text-farm-gold font-bold underline">Go add some fresh goodies</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <label className="text-xs uppercase font-bold text-gray-400 tracking-widest block">Selected Items</label>
                        <div className="divide-y divide-gray-100 bg-gray-50 rounded-2xl border border-gray-100">
                          {cart.map(id => {
                            const p = PRODUCTS.find(prod => prod.id === id);
                            return (
                              <div key={id} className="p-4 flex items-center justify-between">
                                <span className="font-medium text-farm-green">{p?.name}</span>
                                <button type="button" onClick={() => removeFromCart(id)} className="text-xs text-red-500 font-bold hover:underline">Remove</button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-bold text-gray-400">Full Name</label>
                          <input required type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase font-bold text-gray-400">Phone</label>
                          <input required type="tel" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none" placeholder="01692 000000" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase font-bold text-gray-400">Email Address</label>
                        <input required type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none" placeholder="john@example.com" />
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs uppercase font-bold text-gray-400 tracking-widest block">Type</label>
                        <div className="grid grid-cols-2 gap-3">
                           <button type="button" className="p-4 rounded-xl border-2 border-farm-gold bg-farm-gold/5 flex items-center gap-3 font-bold text-farm-green"><MapPin className="w-4 h-4"/> Collection</button>
                           <button type="button" className="p-4 rounded-xl border-2 border-gray-100 hover:border-farm-gold transition-all flex items-center gap-3 font-bold text-gray-400"><Truck className="w-4 h-4"/> Local Delivery</button>
                        </div>
                      </div>

                      <button className="btn-primary w-full py-5 text-lg">Send Request</button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Shop;
