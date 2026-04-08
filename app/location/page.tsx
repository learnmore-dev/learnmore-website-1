import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import locationsData from '@/data/locations.json';

export default function LocationsPage() {
  const { locations } = locationsData;

  // Filter unique locations by name to avoid duplicates
  const uniqueLocations = locations.filter((loc, index, self) => 
    index === self.findIndex((l) => l.slug === loc.slug)
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-red-500">Training Centers</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our state-of-the-art training centers across India and worldwide. 
              Choose the location most convenient for you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">{uniqueLocations.length}+</div>
              <div className="text-gray-500 text-sm">Training Centers</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">10+</div>
              <div className="text-gray-500 text-sm">Cities in India</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">15+</div>
              <div className="text-gray-500 text-sm">International Centers</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-red-500">100%</div>
              <div className="text-gray-500 text-sm">Placement Support</div>
            </div>
          </div>

          {/* Bangalore Locations Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-red-500"></i> 
              Bangalore Centers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueLocations.filter(loc => 
                loc.name === 'Marathahalli' || 
                loc.name === 'BTM Layout' || 
                loc.name === 'Kalyan Nagar' || 
                loc.name === 'Hebbal' ||
                loc.name === 'Whitefield'
              ).map((location) => (
                <Link 
                  key={location.id} 
                  href={`/location/${location.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-red-500 text-xl"></i>
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-red-500 transition">
                        {location.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      <i className="fas fa-location-dot text-red-500 mr-2"></i>
                      {location.address}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <i className="fas fa-phone text-red-500 mr-2"></i>
                      {location.phone}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      <i className="fas fa-envelope text-red-500 mr-2"></i>
                      {location.email}
                    </p>
                    {location.courses && location.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.courses.slice(0, 3).map((course: string, idx: number) => (
                          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {course}
                          </span>
                        ))}
                        {location.courses.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            +{location.courses.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 text-sm font-medium">
                        View Details <i className="fas fa-arrow-right ml-1"></i>
                      </span>
                      <span className="text-gray-400 text-xs">
                        <i className="far fa-clock mr-1"></i> Open Today
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* India Locations Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="fas fa-flag-india text-red-500"></i> 
              Other India Centers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueLocations.filter(loc => 
                loc.name !== 'Marathahalli' && 
                loc.name !== 'BTM Layout' && 
                loc.name !== 'Kalyan Nagar' && 
                loc.name !== 'Hebbal' &&
                loc.name !== 'Whitefield' &&
                loc.name !== 'USA' &&
                loc.name !== 'Singapore' &&
                loc.name !== 'Macao SAR' &&
                loc.name !== 'Luxembourg' &&
                loc.name !== 'Denmark' &&
                loc.name !== 'Taiwan' &&
                loc.name !== 'Qatar' &&
                loc.name !== 'Norway' &&
                loc.name !== 'UAE' &&
                loc.name !== 'Belgium' &&
                loc.name !== 'Austria' &&
                loc.name !== 'Switzerland' &&
                loc.name !== 'Brunei' &&
                loc.name !== 'Guyana' &&
                loc.name !== 'Australia' &&
                loc.name !== 'Germany' &&
                loc.name !== 'France'
              ).map((location) => (
                <Link 
                  key={location.id} 
                  href={`/location/${location.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-red-500 text-xl"></i>
                      </div>
                      <h2 className="text-xl font-bold group-hover:text-red-500 transition">
                        {location.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{location.address}</p>
                    <p className="text-gray-600 text-sm mb-2">
                      <i className="fas fa-phone text-red-500 mr-2"></i>
                      {location.phone}
                    </p>
                    {location.courses && location.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {location.courses.length} Courses
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 text-sm font-medium">
                        View Details <i className="fas fa-arrow-right ml-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* International Locations Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <i className="fas fa-globe text-red-500"></i> 
              International Centers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniqueLocations.filter(loc => 
                loc.name === 'USA' ||
                loc.name === 'Singapore' ||
                loc.name === 'Macao SAR' ||
                loc.name === 'Luxembourg' ||
                loc.name === 'Denmark' ||
                loc.name === 'Taiwan' ||
                loc.name === 'Qatar' ||
                loc.name === 'Norway' ||
                loc.name === 'UAE' ||
                loc.name === 'Belgium' ||
                loc.name === 'Austria' ||
                loc.name === 'Switzerland' ||
                loc.name === 'Brunei' ||
                loc.name === 'Guyana' ||
                loc.name === 'Australia' ||
                loc.name === 'Germany' ||
                loc.name === 'France'
              ).map((location) => (
                <Link 
                  key={location.id} 
                  href={`/location/${location.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group block"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <i className="fas fa-globe text-red-500 text-xl"></i>
                      </div>
                      <h2 className="text-xl font-bold group-hover:text-red-500 transition">
                        {location.name}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{location.country || location.name}</p>
                    <p className="text-gray-600 text-sm mb-2">
                      <i className="fas fa-phone text-red-500 mr-2"></i>
                      {location.phone}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      <i className="fas fa-envelope text-red-500 mr-2"></i>
                      {location.email}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 text-sm font-medium">
                        View Details <i className="fas fa-arrow-right ml-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Can't Find Your Location?</h2>
            <p className="mb-6">We also offer online training with the same quality and placement support</p>
            <Link href="/course" className="inline-block bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Online Courses
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}