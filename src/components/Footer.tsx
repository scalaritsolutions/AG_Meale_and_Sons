import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-earth text-farm-cream pt-20 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-farm-gold rounded-lg flex items-center justify-center text-farm-green font-serif text-xl font-bold">M</div>
              <span className="font-serif text-2xl font-bold tracking-tight">A.G. Meale & Sons</span>
            </div>
            <p className="opacity-70 text-sm leading-relaxed">
              Rooted in Norfolk since the 1930s. We pride ourselves on growing the finest local produce and providing a warm welcome.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-farm-gold hover:text-farm-green transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-farm-gold hover:text-farm-green transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-farm-gold hover:text-farm-green transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li><Link to="/shop" className="hover:text-farm-gold transition-colors">Farm Shop</Link></li>
              <li><Link to="/coffee-shop" className="hover:text-farm-gold transition-colors">Vera's Coffee Shop</Link></li>
              <li><Link to="/pyo" className="hover:text-farm-gold transition-colors">Pick Your Own</Link></li>
              <li><Link to="/nursery" className="hover:text-farm-gold transition-colors">Plant Nursery</Link></li>
              <li><Link to="/contact" className="hover:text-farm-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Information</h4>
            <div className="space-y-4 text-sm opacity-70">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-farm-gold shrink-0" />
                <span>Wayford Nurseries, Stalham, NR12 9LJ</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-farm-gold shrink-0" />
                <span>01692 580226</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-farm-gold shrink-0" />
                <span>info@agmeale.co.uk</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm opacity-70 mb-4">Get seasonal updates and exclusive offers delivered to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-farm-gold w-full" />
              <button className="bg-farm-gold text-farm-green p-2 rounded-lg hover:opacity-90 transition-all">
                <ChevronRight />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2026 A.G. Meale & Sons Ltd. All rights reserved.</p>
          <p>Designed with care in Norfolk.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
