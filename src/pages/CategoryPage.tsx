import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TreePine, 
  Map as MapIcon, 
  Calendar, 
  Leaf, 
  Footprints, 
  Flame, 
  Bird, 
  Briefcase,
  Gift,
  ShoppingBag
} from 'lucide-react';

const CATEGORY_CONTENT: Record<string, any> = {
  'christmas-trees': {
    title: 'Christmas Trees & Wreaths',
    icon: <TreePine className="w-12 h-12" />,
    description: 'Our traditional Norway Spruce and Nordmann Fir trees are available every December.',
    details: [
      { label: 'Norway Spruce (Pot Grown)', value: '£38 (100-120cm)' },
      { label: 'Norway Spruce (Cut)', value: '£29 (175-200cm)' },
      { label: 'Nordmann Fir (Cut)', value: '£40 (175-200cm)' },
      { label: 'Services', value: 'Free netting, help to car, local delivery from £5' },
    ],
    image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=800'
  },
  'maize-maze': {
    title: 'Maize Maze',
    icon: <MapIcon className="w-12 h-12" />,
    description: 'Our award-winning Maize Maze is a summer highlight for the whole family.',
    details: [
      { label: 'Status', value: 'Closed for 2025 season' },
      { label: 'Last Season Pricing', value: '£5 per person, Under 3s free' },
      { label: 'Includes', value: 'Animal trail, quiz, drink at Vera\'s' },
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  'gardening': {
    title: 'Gardening & Plant Centre',
    icon: <Leaf className="w-12 h-12" />,
    description: 'A vast selection of locally grown plants, shrubs, and gardening essentials.',
    details: [
      { label: 'Plants', value: 'Bedding plants, fruit trees, roses, perennials' },
      { label: 'Services', value: 'Hanging basket refilling service' },
      { label: 'Soil/Compost', value: 'Full range of growing media available' },
    ],
    image: 'https://images.unsplash.com/photo-1416870213410-66fc33cd965b?auto=format&fit=crop&q=80&w=800'
  },
  'footwear': {
    title: 'Aigle Boots & Footwear',
    icon: <Footprints className="w-12 h-12" />,
    description: 'Official stockist of Aigle, Gritstone, and Town & Country footwear.',
    details: [
      { label: 'Aigle Offer', value: '15% off RRP' },
      { label: 'Parcours 2 ISO', value: '£170' },
      { label: 'Parcours 2', value: '£119' },
    ],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  'heating': {
    title: 'Heating & Fuels',
    icon: <Flame className="w-12 h-12" />,
    description: 'Keep warm with our range of smokeless coals, kiln-dried logs, and Calor gas.',
    details: [
      { label: 'Brazier Coal', value: '£7.99 (10kg)' },
      { label: 'Mixed Logs', value: '£5.50 per bag' },
      { label: 'Calor Gas', value: 'Butane, Propane, and Patio gas available' },
    ],
    image: 'https://images.unsplash.com/photo-1520110120185-60f8ea74514c?auto=format&fit=crop&q=80&w=800'
  },
  'pet-food': {
    title: 'Wild Bird & Pet Food',
    icon: <Bird className="w-12 h-12" />,
    description: 'Extensive range of food and supplies for your garden birds and household pets.',
    details: [
      { label: 'Wild Bird', value: 'Sunflower hearts, peanuts, suet treats' },
      { label: 'Pet Brands', value: 'Marriage\'s, Copdock Mill, James Wellbeloved' },
      { label: 'Livestock', value: 'Chicken, guinea pig, and rabbit feed' },
    ],
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800'
  },
  'jobs': {
    title: 'Job Vacancies',
    icon: <Briefcase className="w-12 h-12" />,
    description: 'Join the family team at A.G. Meale & Sons.',
    details: [
      { label: 'Current Opening', value: 'Permanent Full-Time Chef' },
      { label: 'Hours', value: '39 hours per week (includes weekends)' },
      { label: 'Application', value: 'Email CV to office@agmeale.co.uk' },
    ],
    image: 'https://images.unsplash.com/photo-1521737706045-32bd62ccad46?auto=format&fit=crop&q=80&w=800'
  },
  'christmas-fair': {
    title: 'Christmas Fair & Tasting',
    icon: <Calendar className="w-12 h-12" />,
    description: 'A festive weekend of food, music, and local crafts.',
    details: [
      { label: 'Dates', value: '28th & 29th November 2026' },
      { label: 'Time', value: '10:00 am - 3:00 pm' },
      { label: 'Highlights', value: 'Stalls, Santa, food tastings' },
    ],
    image: 'https://images.unsplash.com/photo-1544257750-572358f5da0a?auto=format&fit=crop&q=80&w=800'
  },
  'gift-ideas': {
    title: 'Gift Ideas',
    icon: <Gift className="w-12 h-12" />,
    description: 'Unique and thoughtful gifts for any occasion.',
    details: [
      { label: 'Range', value: 'Local hampers, garden ornaments, candles' },
      { label: 'Gift Vouchers', value: 'Available for both Shop and Cafe' },
    ],
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800'
  },
  'local-produce': {
    title: 'Local Produce',
    icon: <ShoppingBag className="w-12 h-12" />,
    description: 'The best of Norfolk, from our fields to your table.',
    details: [
      { label: 'Meats', value: 'Local butchers selection' },
      { label: 'Cheeses', value: 'Norfolk and regional specialties' },
      { label: 'Bakery', value: 'Fresh bread and cakes delivered daily' },
    ],
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800'
  }
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? CATEGORY_CONTENT[slug] : null;

  if (!content) {
    return (
      <div className="pt-32 px-6 text-center h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-farm-green">Page Not Found</h1>
        <p className="text-gray-500 mt-4">We couldn't find the information you were looking for.</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative h-[40vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-farm-green/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-farm-cream">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex p-4 bg-farm-gold/20 rounded-full mb-6 text-farm-gold">
               {content.icon}
             </div>
             <h1 className="text-5xl font-serif mb-4">{content.title}</h1>
             <p className="text-xl max-w-2xl mx-auto opacity-90">{content.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="bg-farm-cream/30 rounded-[3rem] p-12 border border-farm-cream">
             <h2 className="text-3xl font-serif text-farm-green mb-8">Details & Pricing</h2>
             <div className="grid gap-6">
               {content.details.map((detail: any, i: number) => (
                 <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-farm-gold/10 pb-4 last:border-0">
                    <span className="font-bold text-farm-green uppercase text-xs tracking-widest">{detail.label}</span>
                    <span className="text-lg text-farm-earth font-serif">{detail.value}</span>
                 </div>
               ))}
             </div>
           </div>

           <div className="mt-12 text-center">
              <p className="text-gray-500 italic mb-8">Please contact us for the most up-to-date availability and specific enquiries.</p>
              <div className="flex flex-wrap justify-center gap-4">
                 <button className="btn-primary px-8 py-4">Inquire Now</button>
                 <button className="px-8 py-4 border-2 border-farm-green text-farm-green font-bold rounded-full hover:bg-farm-green hover:text-white transition-colors">Call 01692 580226</button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
