'use client';

import Link from 'next/link';
import { useState } from 'react';
import locationsData from '@/data/locations.json';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Get unique locations for India and International
  const { locations } = locationsData;
  
  // Filter Bangalore locations
  const bangaloreLocations = locations.filter(loc => 
    loc.name === 'Marathahalli' || 
    loc.name === 'BTM Layout' || 
    loc.name === 'Kalyan Nagar' || 
    loc.name === 'Hebbal' ||
    loc.name === 'Whitefield'
  );
  
  // Filter India locations (excluding Bangalore)
  const indiaLocations = locations.filter(loc => 
    (loc.address?.includes('India') || loc.address?.includes('Bangalore') || 
     loc.name === 'Ahmedabad' || loc.name === 'Jaipur' || loc.name === 'Mumbai' ||
     loc.name === 'Patna' || loc.name === 'Chandigarh' || loc.name === 'Trivandrum' ||
     loc.name === 'Indore' || loc.name === 'Delhi' || loc.name === 'Hyderabad' ||
     loc.name === 'Gurgaon' || loc.name === 'Visakhapatnam' || loc.name === 'Noida' ||
     loc.name === 'Mysore' || loc.name === 'Lucknow' || loc.name === 'Cochin' ||
     loc.name === 'Chennai' || loc.name === 'Warangal' || loc.name === 'Trichy') &&
    !bangaloreLocations.includes(loc)
  );
  
  // Filter International locations
  const internationalLocations = locations.filter(loc => 
    loc.country && loc.country !== 'India'
  );

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="LearnMore Logo" className="h-10" />
              <div>
                <span className="text-red-500 font-bold text-xl">LearnMore</span>
                <span className="text-white font-bold text-xl"> Technologies</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Learnmore Technologies is a leading software training institute offering industry-focused IT courses 
              with hands-on practical learning, real-time projects, and dedicated placement support.
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@learnnmore" target="_blank" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="https://www.instagram.com/learnmore_technologies/" target="_blank" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/" target="_blank" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="https://wa.me/919514203013" target="_blank" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
              <a href="https://www.facebook.com/share/1CyNbbCSho/" target="_blank" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition text-sm">🏠 Home</Link></li>
              <li><Link href="/course" className="text-gray-400 hover:text-red-500 transition text-sm">📚 Courses</Link></li>
              <li><Link href="/placement" className="text-gray-400 hover:text-red-500 transition text-sm">🎯 Placements</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-red-500 transition text-sm">⚙️ Services</Link></li>
              <li><Link href="/internships" className="text-gray-400 hover:text-red-500 transition text-sm">💼 Internships</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-red-500 transition text-sm">📝 Blog</Link></li>
            </ul>
          </div>

          {/* Column 3 - Bangalore Locations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">📍 Bangalore Centers</h3>
            <ul className="space-y-2">
              {bangaloreLocations.map((loc) => (
                <li key={loc.id}>
                  <Link href={`/location/${loc.slug}`} className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-red-500 mt-1"></i>
                <div>
                  <p className="text-gray-400 text-sm">Marathahalli: <a href="tel:+919036524555" className="hover:text-red-500">+91 90365 24555</a></p>
                  <p className="text-gray-400 text-sm">BTM: <a href="tel:+919036542555" className="hover:text-red-500">+91 90365 42555</a></p>
                  <p className="text-gray-400 text-sm">Kalyan Nagar: <a href="tel:+919036354551" className="hover:text-red-500">+91 90363 54551</a></p>
                  <p className="text-gray-400 text-sm">Hebbal: <a href="tel:+919514203013" className="hover:text-red-500">+91 95142 03013</a></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fas fa-envelope text-red-500 mt-1"></i>
                <a href="mailto:office.learnmore@gmail.com" className="text-gray-400 text-sm hover:text-red-500 transition">office.learnmore@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* India Locations Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">🇮🇳 Our India Centers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {indiaLocations.map((loc) => (
              <Link 
                key={loc.id} 
                href={`/location/${loc.slug}`}
                className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800"
              >
                <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* International Locations Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">🌍 International Centers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {internationalLocations.map((loc) => (
              <Link 
                key={loc.id} 
                href={`/location/${loc.slug}`}
                className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800"
              >
                <i className="fas fa-globe text-red-500 text-xs"></i>
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on new courses and events</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-green-500 text-sm mt-2">✓ Thanks for subscribing!</p>
              )}
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-3">Working Hours</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <i className="fas fa-calendar-day text-red-500 mr-2"></i>
                <span className="text-gray-300">Mon – Fri:</span>
                <span className="text-gray-400 ml-2">9:00 AM – 9:00 PM</span>
              </div>
              <div>
                <i className="fas fa-calendar-weekend text-red-500 mr-2"></i>
                <span className="text-gray-300">Sat – Sun:</span>
                <span className="text-gray-400 ml-2">10:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Learnmore Technologies. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 italic">
            "Learn More. Grow More. Succeed More."
          </p>
        </div>
      </div>
    </footer>
  );
}