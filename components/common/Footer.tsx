'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import locationsData from '@/data/locations.json';
import coursesData from '@/data/courses.json';
import offersData from '@/data/offers.json';
import { useEnroll } from '@/context/EnrollContext';

export default function Footer() {
  const { openEnrollModal } = useEnroll();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const pathname = usePathname();
  
  // Detect current course from URL
  const [currentCourse, setCurrentCourse] = useState<string | null>(null);
  const [currentCourseName, setCurrentCourseName] = useState<string | null>(null);
  const [currentCourseDisplayName, setCurrentCourseDisplayName] = useState<string | null>(null);

  useEffect(() => {
    // Check if we are on a course page (URL pattern: /course-name-training-in-location)
    const match = pathname.match(/(\w+(?:-\w+)?)-training-in-/);
    if (match && match[1]) {
      setCurrentCourse(match[1]);
      
      // Get course friendly name for URL
      const courseMap: Record<string, string> = {
        'aws': 'AWS',
        'python': 'Python',
        'python-fullstack': 'Python Full Stack',
        'devops': 'DevOps',
        'software-testing': 'Software Testing',
        'java': 'Java',
        'java-fullstack': 'Java Full Stack',
        'data-analytics': 'Data Analytics',
        'azure': 'Microsoft Azure',
        'data-science': 'Data Science',
        'data-engineering': 'Data Engineering',
        'power-bi': 'Power BI',
        'react': 'React JS',
        'digital-marketing': 'Digital Marketing',
        'cybersecurity': 'Cybersecurity'
      };
      setCurrentCourseName(courseMap[match[1]] || match[1]);
      setCurrentCourseDisplayName(match[1]);
    } else {
      setCurrentCourse(null);
      setCurrentCourseName(null);
      setCurrentCourseDisplayName(null);
    }
  }, [pathname]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Get unique locations
  const { locations } = locationsData;
  const { courses } = coursesData;
  const { offers } = offersData;

  // Get all unique locations (no duplicates)
  const uniqueLocations = locations.filter((loc, index, self) => 
    index === self.findIndex((l) => l.slug === loc.slug)
  );

  // Filter Bangalore locations
  const bangaloreSlugs = ['marathahalli', 'btm', 'kalyan-nagar', 'hebbal', 'whitefield'];
  const bangaloreLocations = uniqueLocations.filter(loc => 
    bangaloreSlugs.includes(loc.slug)
  );
  
  // Filter India locations (excluding Bangalore)
  const indiaSlugs = ['ahmedabad', 'jaipur', 'mumbai', 'patna', 'chandigarh', 'trivandrum', 
    'indore', 'delhi', 'hyderabad', 'gurgaon', 'visakhapatnam', 'noida', 'mysore', 
    'lucknow', 'cochin', 'chennai', 'warangal', 'trichy'];
  const indiaLocations = uniqueLocations.filter(loc => 
    indiaSlugs.includes(loc.slug)
  );
  
  // Filter International locations
  const internationalSlugs = ['usa', 'singapore', 'macao-sar', 'luxembourg', 'denmark', 'taiwan', 
    'qatar', 'norway', 'uae', 'belgium', 'austria', 'switzerland', 'brunei', 'guyana', 
    'australia', 'germany', 'france'];
  const internationalLocations = uniqueLocations.filter(loc => 
    internationalSlugs.includes(loc.slug)
  );

  // List of all courses for "Training in All Locations" section
  const allCoursesList = [
    { key: 'aws', name: 'AWS', displayName: 'AWS Training', icon: 'fab fa-aws', color: 'text-blue-500' },
    { key: 'python', name: 'Python', displayName: 'Python Training', icon: 'fab fa-python', color: 'text-yellow-500' },
    { key: 'python-fullstack', name: 'Python Full Stack', displayName: 'Python Full Stack Training', icon: 'fab fa-python', color: 'text-yellow-500' },
    { key: 'devops', name: 'DevOps', displayName: 'DevOps Training', icon: 'fas fa-cogs', color: 'text-blue-500' },
    { key: 'software-testing', name: 'Software Testing', displayName: 'Software Testing Training', icon: 'fas fa-bug', color: 'text-red-500' },
    { key: 'java', name: 'Java', displayName: 'Java Training', icon: 'fab fa-java', color: 'text-orange-500' },
    { key: 'java-fullstack', name: 'Java Full Stack', displayName: 'Java Full Stack Training', icon: 'fab fa-java', color: 'text-orange-500' },
    { key: 'data-analytics', name: 'Data Analytics', displayName: 'Data Analytics Training', icon: 'fas fa-chart-line', color: 'text-green-500' },
    { key: 'azure', name: 'Azure', displayName: 'Microsoft Azure Training', icon: 'fab fa-microsoft', color: 'text-blue-500' },
    { key: 'data-science', name: 'Data Science', displayName: 'Data Science Training', icon: 'fas fa-brain', color: 'text-purple-500' },
    { key: 'data-engineering', name: 'Data Engineering', displayName: 'Data Engineering Training', icon: 'fas fa-database', color: 'text-teal-500' },
    { key: 'power-bi', name: 'Power BI', displayName: 'Power BI Training', icon: 'fas fa-chart-bar', color: 'text-green-500' },
    { key: 'react', name: 'React', displayName: 'React JS Training', icon: 'fab fa-react', color: 'text-blue-500' },
    { key: 'digital-marketing', name: 'Digital Marketing', displayName: 'Digital Marketing Training', icon: 'fas fa-bullhorn', color: 'text-orange-500' },
    { key: 'cybersecurity', name: 'Cybersecurity', displayName: 'Cybersecurity Training', icon: 'fas fa-shield-alt', color: 'text-red-500' },
  ];

  // Top offers for footer
  const topOffers = offers.slice(0, 4);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* ================= AWS Training in All Locations (Dynamic Section) ================= */}
        {/* This section shows current course training in all locations */}
        {currentCourse && currentCourseName && currentCourseDisplayName && (
          <div className="border-b border-gray-800 pb-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full">
                {currentCourse === 'aws' && <i className="fab fa-aws text-orange-500 text-xl"></i>}
                {currentCourse === 'python' && <i className="fab fa-python text-yellow-500 text-xl"></i>}
                {currentCourse === 'devops' && <i className="fas fa-cogs text-blue-500 text-xl"></i>}
                {currentCourse === 'java' && <i className="fab fa-java text-red-500 text-xl"></i>}
                {currentCourse === 'react' && <i className="fab fa-react text-blue-500 text-xl"></i>}
                <i className="fas fa-map-marker-alt text-red-500 text-sm"></i>
                <h3 className="text-white font-bold text-lg">{currentCourseName} Training in All Locations</h3>
              </div>
            </div>
            
            {/* Bangalore Locations */}
            <div className="mb-6">
              <h4 className="text-red-400 font-semibold text-md mb-3 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-red-500"></i> Bangalore Centers
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {bangaloreLocations.map((loc) => (
                  <Link 
                    key={loc.id} 
                    href={`/${currentCourseDisplayName}-training-in-${loc.slug}`}
                    className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 group"
                  >
                    <i className="fas fa-map-marker-alt text-red-500 text-xs group-hover:scale-110 transition"></i>
                    <span>{currentCourseName} training in {loc.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* India Locations */}
            {indiaLocations.length > 0 && (
              <div className="mb-6">
                <h4 className="text-red-400 font-semibold text-md mb-3 flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-red-500"></i> Other Cities in India
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {indiaLocations.map((loc) => (
                    <Link 
                      key={loc.id} 
                      href={`/${currentCourseDisplayName}-training-in-${loc.slug}`}
                      className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 group"
                    >
                      <i className="fas fa-map-marker-alt text-red-500 text-xs group-hover:scale-110 transition"></i>
                      <span>{currentCourseName} training in {loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* International Locations */}
            {internationalLocations.length > 0 && (
              <div>
                <h4 className="text-red-400 font-semibold text-md mb-3 flex items-center gap-2">
                  <i className="fas fa-globe text-red-500"></i> International Centers
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {internationalLocations.map((loc) => (
                    <Link 
                      key={loc.id} 
                      href={`/${currentCourseDisplayName}-training-in-${loc.slug}`}
                      className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 group"
                    >
                      <i className="fas fa-globe text-red-500 text-xs group-hover:scale-110 transition"></i>
                      <span>{currentCourseName} training in {loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= ALL COURSES TRAINING IN ALL LOCATIONS SECTION ================= */}
        <div className="border-b border-gray-800 pb-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full">
              <i className="fas fa-globe text-blue-500 text-xl"></i>
              <h3 className="text-white font-bold text-lg">All Courses Training in All Locations</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {allCoursesList.map((course) => (
              <div key={course.key} className="border border-gray-800 rounded-lg p-3 hover:border-red-500 transition">
                <div className="flex items-center gap-2 mb-3">
                  <i className={`${course.icon} ${course.color} text-lg`}></i>
                  <h4 className="text-white font-semibold text-sm">{course.displayName}</h4>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-xs mb-2">Available in:</p>
                  <div className="flex flex-wrap gap-1">
                    {bangaloreLocations.slice(0, 3).map((loc) => (
                      <Link 
                        key={loc.id} 
                        href={`/${course.key}-training-in-${loc.slug}`}
                        className="text-gray-400 hover:text-red-500 text-xs flex items-center gap-1 px-1 py-0.5 rounded hover:bg-gray-800"
                      >
                        <i className="fas fa-map-marker-alt text-red-500 text-[8px]"></i>
                        {loc.name}
                      </Link>
                    ))}
                    {indiaLocations.length > 0 && (
                      <Link 
                        href={`/${course.key}-training-in-${indiaLocations[0]?.slug}`}
                        className="text-gray-400 hover:text-red-500 text-xs flex items-center gap-1 px-1 py-0.5 rounded hover:bg-gray-800"
                      >
                        <i className="fas fa-map-marker-alt text-red-500 text-[8px]"></i>
                        +{indiaLocations.length + internationalLocations.length} more
                      </Link>
                    )}
                  </div>
                  <Link 
                    href={`/${course.key}-training-in-marathahalli`}
                    className="text-red-500 text-xs hover:underline block mt-2"
                  >
                    View All Locations →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
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
              <a href="https://www.youtube.com/@learnnmore" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="https://www.instagram.com/learnmore_technologies/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="https://www.linkedin.com/company/learnmoretechnologiesbangalore/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="https://wa.me/919514203013" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
              <a href="https://www.facebook.com/share/1CyNbbCSho/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Popular Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.slice(0, 6).map((course: any) => (
                <li key={course.id}>
                  <Link href={`/course/${course.slug}`} className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2">
                    <i className={`${course.icon || 'fas fa-code'} text-xs`}></i>
                    {course.title.length > 30 ? course.title.substring(0, 30) + '...' : course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Training in Bangalore */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">📍 Training in Bangalore</h3>
            <ul className="space-y-2">
              {bangaloreLocations.map((loc) => (
                <li key={loc.id}>
                  <Link href={`/location/${loc.slug}`} className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-red-500 text-xs"></i>
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/location" className="text-red-500 text-sm font-semibold hover:underline flex items-center gap-1">
                  View All Locations <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Quick Training Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Training</h3>
            <ul className="space-y-2">
              {allCoursesList.slice(0, 8).map((course) => (
                <li key={course.key}>
                  <Link href={`/${course.key}-training-in-marathahalli`} className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2">
                    <i className={`${course.icon} ${course.color} text-xs`}></i>
                    {course.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Hot Offers */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">🎉 Hot Offers</h3>
            <ul className="space-y-2">
              {topOffers.map((offer) => (
                <li key={offer.id}>
                  <Link href={offer.link} className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2">
                    <i className="fas fa-tag text-red-500 text-xs"></i>
                    {offer.title.length > 25 ? offer.title.substring(0, 25) + '...' : offer.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/offer" className="text-red-500 text-sm font-semibold hover:underline flex items-center gap-1">
                  View All Offers <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6 - Contact Info */}
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
              <button 
                onClick={() => openEnrollModal()}
                className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* India Locations Section */}
        {indiaLocations.length > 0 && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="text-white font-bold text-lg mb-4 text-center">🇮🇳 Nationwide Excellence in Skill Development</h3>
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
        )}

        {/* International Locations Section */}
        {internationalLocations.length > 0 && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="text-white font-bold text-lg mb-4 text-center">🌍 Worldwide Professional Training Centers</h3>
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
        )}

        {/* All Courses Links Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-white font-bold text-lg mb-4 text-center">📚 All Courses</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {courses.map((course: any) => (
              <Link 
                key={course.id} 
                href={`/course/${course.slug}`}
                className="text-gray-400 hover:text-red-500 transition text-sm flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800"
              >
                <i className={`${course.icon || 'fas fa-code'} text-xs`}></i>
                {course.title.length > 35 ? course.title.substring(0, 35) + '...' : course.title}
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