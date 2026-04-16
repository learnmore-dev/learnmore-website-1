'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import blogsData from '@/data/blogs.json';

export default function BlogPage() {
  const { blogs, categories } = blogsData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs by category and search
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured blogs (first 3)
  const featuredBlogs = blogs.filter(b => b.featured).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image - No Overlay Color */}
        <section className="relative py-24 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Blog Hero Background"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
                }
              }}
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur rounded-full px-4 py-2 mb-4">
              <i className="fas fa-newspaper text-sm"></i>
              <span className="text-sm">Our Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Insights & <span className="text-yellow-300">Updates</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-md">
              Stay updated with the latest trends in technology, career advice, and industry insights
            </p>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredBlogs.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold mb-3">
                  Featured Articles
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Editor's Picks</h2>
                <p className="text-gray-500 mt-2">Hand-picked articles for you</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredBlogs.map((blog, idx) => {
                  const gradientColors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-teal-500'];
                  return (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.slug}`}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`relative h-52 overflow-hidden bg-gradient-to-r ${gradientColors[idx % gradientColors.length]}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <i className="fas fa-newspaper text-7xl text-white/20"></i>
                        </div>
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
                          Featured
                        </span>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">{blog.category}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500 text-xs">{blog.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                              <i className="fas fa-user text-gray-500 text-sm"></i>
                            </div>
                            <span className="text-sm text-gray-600">{blog.author}</span>
                          </div>
                          <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <i className="fas fa-arrow-right text-xs"></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Main Blog Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
              <div className="relative flex-1 max-w-md">
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat.slug
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat.name}
                    {cat.slug !== 'all' && <span className="ml-1 text-xs opacity-70">({cat.count})</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <i className="fas fa-file-alt text-5xl text-gray-300 group-hover:scale-110 transition-transform duration-300"></i>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">{blog.category}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-xs">{blog.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-gray-500 text-xs"></i>
                          </div>
                          <span className="text-xs text-gray-500">{blog.author}</span>
                        </div>
                        <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                          Read <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                <i className="fas fa-envelope text-sm"></i>
                <span className="text-sm">Newsletter</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-lg mb-6 text-white/90">Get the latest tech insights and updates directly in your inbox</p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/70 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}