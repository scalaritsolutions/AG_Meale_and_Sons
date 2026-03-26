import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-serif text-farm-green mb-8">Get in Touch</h1>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Whether you have a question about our produce, nursery stock, or want to book a party at Vera's, we're here to help.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-farm-cream flex items-center justify-center text-farm-green shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Visit Us</h4>
                  <p className="text-gray-500">Wayford Nurseries, Stalham, NR12 9LJ</p>
                  <button className="text-farm-gold font-bold text-sm mt-2 flex items-center gap-1">Open in Google Maps <ArrowRight className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-farm-cream flex items-center justify-center text-farm-green shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-gray-500">Main Office: 01692 580226</p>
                  <p className="text-gray-500 text-sm">Vera's Coffee Shop: 01692 583900</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-farm-cream flex items-center justify-center text-farm-green shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-gray-500">info@agmeale.co.uk</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-farm-green rounded-[2.5rem] text-farm-cream">
              <h4 className="font-bold text-xl mb-6 flex items-center gap-3"><Clock className="text-farm-gold" /> Opening Hours</h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Mon – Sat</span>
                  <span className="font-bold text-farm-gold">8:30am – 5:30pm</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Sunday</span>
                  <span className="font-bold text-farm-gold">10:00am – 4:00pm</span>
                </div>
                <p className="pt-4 text-xs italic opacity-40">Vera's Coffee Shop serves food until 2:30pm (Afternoon Tea from 2:30pm).</p>
              </div>
            </div>
          </div>

          <div className="bg-farm-cream/50 rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-serif text-farm-green mb-8">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Full Name</label>
                  <input type="text" className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Email Address</label>
                  <input type="email" className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Subject</label>
                <select className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none">
                  <option>General Inquiry</option>
                  <option>Vera's Booking</option>
                  <option>Nursery Inquiry</option>
                  <option>PYO Question</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Message</label>
                <textarea rows={6} className="w-full p-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-farm-gold outline-none resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                Send Message <MessageSquare className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
