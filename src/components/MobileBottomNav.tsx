import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  ShoppingBasket, 
  Coffee, 
  Flower2, 
  Pickaxe 
} from 'lucide-react';

const MobileBottomNav = () => {
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', path: '/' },
    { icon: <ShoppingBasket className="w-5 h-5" />, label: 'Shop', path: '/shop' },
    { icon: <Coffee className="w-5 h-5" />, label: 'Cafe', path: '/coffee-shop' },
    { icon: <Flower2 className="w-5 h-5" />, label: 'Nursery', path: '/nursery' },
    { icon: <Pickaxe className="w-5 h-5" />, label: 'PYO', path: '/pyo' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 px-4 py-2 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <NavLink 
          key={item.label} 
          to={item.path}
          className={({ isActive }) => {
            const activeClass = isActive ? 'text-farm-green scale-110' : 'text-gray-400';
            return `flex flex-col items-center gap-1 p-2 transition-all ${activeClass}`;
          }}
        >
          {({ isActive }) => (
            <>
              {item.icon}
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
              <div className={`w-1 h-1 rounded-full bg-farm-gold mt-0.5 transition-all ${isActive ? 'opacity-100' : 'opacity-0'}`} />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileBottomNav;
