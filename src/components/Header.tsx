import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingBasket, 
  Coffee, 
  Pickaxe, 
  Flower2, 
  Phone,
  ChevronDown,
  Info
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navSections = [
    { 
      label: 'Visit Us', 
      links: [
        { label: 'Farm Shop', path: '/shop' },
        { label: 'Vera’s Coffee Shop', path: '/coffee-shop' },
        { label: 'Pick Your Own', path: '/pyo' },
        { label: 'Nursery & Gardening', path: '/nursery' },
      ]
    },
    { 
      label: 'What\'s On', 
      links: [
        { label: 'What\'s On at Vera\'s', path: '/coffee-shop#events' },
        { label: 'Maize Maze', path: '/info/maize-maze' },
        { label: 'Christmas Fair', path: '/info/christmas-fair' },
        { label: 'Christmas Trees', path: '/info/christmas-trees' },
      ]
    },
    { 
      label: 'Products', 
      links: [
        { label: 'Local Produce', path: '/info/local-produce' },
        { label: 'Aigle Wellington Boots & Other Footwear', path: '/info/footwear' },
        { label: 'Wild Bird & Pet Food', path: '/info/pet-food' },
        { label: 'Heating & Fuels', path: '/info/heating' },
        { label: 'Gift Ideas', path: '/info/gift-ideas' },
      ]
    },
    { 
      label: 'Information', 
      links: [
        { label: 'About Us', path: '/contact' },
        { label: 'Job Vacancies', path: '/info/jobs' },
        { label: 'Contact Us', path: '/contact' },
      ]
    }
  ];

  const allLinks = navSections.flatMap(s => s.links);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-farm-green rounded-lg flex items-center justify-center text-farm-cream font-serif text-xl font-bold group-hover:bg-farm-gold transition-colors">M</div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight ${(isScrolled || location.pathname !== '/') ? 'text-farm-green' : 'text-farm-cream'}`}>A.G. Meale & Sons</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-farm-gold font-bold">Est. 1930s • Norfolk</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navSections.map((section) => (
            <div 
              key={section.label}
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown(section.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-farm-gold ${(isScrolled || location.pathname !== '/') ? 'text-farm-green' : 'text-farm-cream'}`}>
                {section.label}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === section.label ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === section.label && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl p-6 min-w-[240px] border border-gray-100 mt-2"
                  >
                    <div className="flex flex-col gap-4">
                      {section.links.map(link => (
                        <Link 
                          key={link.label}
                          to={link.path}
                          className="text-gray-600 hover:text-farm-gold font-medium transition-colors flex items-center justify-between group/link"
                        >
                          {link.label}
                          <div className="w-1.5 h-1.5 rounded-full bg-farm-gold opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/shop" className="btn-primary py-2 px-6 text-sm ml-4">Order Online</Link>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          className={`xl:hidden p-2 rounded-lg ${(isScrolled || location.pathname !== '/') ? 'text-farm-green' : 'text-farm-cream'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-farm-cream z-[60] p-6 flex flex-col pt-24 overflow-y-auto no-scrollbar"
          >
            <button className="absolute top-6 right-6 text-farm-green" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 pb-12">
              {navSections.map((section) => (
                <div key={section.label} className="space-y-4">
                  <h3 className="text-[10px] uppercase font-black tracking-[0.2em] text-farm-gold border-l-2 border-farm-gold pl-3">{section.label}</h3>
                  <div className="grid gap-4">
                    {section.links.map((link) => (
                      <Link 
                        key={link.label} 
                        to={link.path} 
                        className="text-2xl font-serif font-bold text-farm-green flex items-center justify-between"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                        <ChevronDown className="w-5 h-5 -rotate-90 text-farm-gold opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/shop" className="btn-primary w-full text-center py-4 mt-4" onClick={() => setIsMobileMenuOpen(false)}>Order Online</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
