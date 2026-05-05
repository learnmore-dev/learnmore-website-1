'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Blog Data
const blogsData = {
  blogs: [
    {
      id: 1,
      slug: "15-features-of-python-that-make-everyone-love-it",
      title: "15 Features Of Python That Make Everyone Love It",
      excerpt: "Python has become one of the most popular programming languages in the world. Discover the key features that make developers fall in love with Python.",
      content: `<p>Python has taken the programming world by storm...</p>`,
      author: "Rahul Sharma",
      date: "April 15, 2026",
      category: "Python",
      readTime: "5 min read",
      icon: "fab fa-python",
      iconColor: "from-blue-500 to-blue-700",
      tags: ["Python", "Programming", "Beginners"]
    },
    {
      id: 2,
      slug: "cloud-computing-trends-2026",
      title: "Cloud Computing Trends in 2026",
      excerpt: "Stay ahead of the curve with the latest cloud computing trends that are shaping the future of IT infrastructure.",
      content: `<p>Cloud computing continues to evolve...</p>`,
      author: "Priya Patel",
      date: "April 12, 2026",
      category: "Cloud",
      readTime: "7 min read",
      icon: "fas fa-cloud",
      iconColor: "from-cyan-500 to-blue-600",
      tags: ["Cloud", "AWS", "Azure", "DevOps"]
    },
    {
      id: 3,
      slug: "data-science-career-guide",
      title: "Data Science Career Guide: Complete Roadmap for 2026",
      excerpt: "Everything you need to know to start and grow your career in Data Science. From skills to salary expectations.",
      content: `<p>Data Science continues to be one of the most promising career paths...</p>`,
      author: "Amit Kumar",
      date: "April 10, 2026",
      category: "Data Science",
      readTime: "10 min read",
      icon: "fas fa-chart-line",
      iconColor: "from-green-500 to-teal-600",
      tags: ["Data Science", "Career", "Machine Learning"]
    },
    {
      id: 4,
      slug: "devops-best-practices",
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "Learn the essential DevOps practices that can transform your development workflow and improve collaboration.",
      content: `<p>DevOps has revolutionized how teams develop...</p>`,
      author: "Rohit Mehra",
      date: "April 8, 2026",
      category: "DevOps",
      readTime: "8 min read",
      icon: "fas fa-cogs",
      iconColor: "from-purple-500 to-pink-600",
      tags: ["DevOps", "CI/CD", "Automation"]
    },
    {
      id: 5,
      slug: "top-10-python-libraries-for-data-science",
      title: "Top 10 Python Libraries for Data Science in 2026",
      excerpt: "Discover the must-know Python libraries that every data scientist should master for data analysis and machine learning.",
      content: `<p>Python's ecosystem of libraries makes it the top choice...</p>`,
      author: "Sanjana Nagraj",
      date: "April 5, 2026",
      category: "Python",
      readTime: "6 min read",
      icon: "fab fa-python",
      iconColor: "from-blue-500 to-blue-700",
      tags: ["Python", "Data Science", "Libraries"]
    },
    {
      id: 6,
      slug: "aws-vs-azure-vs-gcp-comparison",
      title: "AWS vs Azure vs GCP: Which Cloud Platform is Right for You?",
      excerpt: "A comprehensive comparison of the top three cloud platforms to help you choose the best one for your needs.",
      content: `<p>Choosing the right cloud platform can be challenging...</p>`,
      author: "Karthik R",
      date: "April 3, 2026",
      category: "Cloud",
      readTime: "12 min read",
      icon: "fas fa-cloud-upload-alt",
      iconColor: "from-cyan-500 to-blue-600",
      tags: ["AWS", "Azure", "GCP", "Cloud"]
    },
    {
      id: 7,
      slug: "java-vs-python-which-is-better-for-career",
      title: "Java vs Python: Which Programming Language is Better for Your Career?",
      excerpt: "A detailed comparison of Java and Python to help you decide which language to learn for better career opportunities.",
      content: `<p>Both Java and Python are powerful languages...</p>`,
      author: "Rahul Sharma",
      date: "March 28, 2026",
      category: "Programming",
      readTime: "8 min read",
      icon: "fab fa-java",
      iconColor: "from-orange-500 to-red-600",
      tags: ["Java", "Python", "Career"]
    },
    {
      id: 8,
      slug: "cybersecurity-fundamentals",
      title: "Cybersecurity Fundamentals: Essential Concepts Every Professional Should Know",
      excerpt: "Learn the core concepts of cybersecurity and how to protect systems from modern threats.",
      content: `<p>Cybersecurity is more important than ever...</p>`,
      author: "Anjali Singh",
      date: "March 25, 2026",
      category: "Cybersecurity",
      readTime: "9 min read",
      icon: "fas fa-shield-alt",
      iconColor: "from-red-500 to-red-700",
      tags: ["Cybersecurity", "Security", "Networking"]
    },
    {
      id: 9,
      slug: "full-stack-development-roadmap",
      title: "Full Stack Development Roadmap: From Beginner to Pro",
      excerpt: "A complete guide to becoming a full stack developer with the right skills, tools, and learning path.",
      content: `<p>Full stack development is one of the most sought-after skills...</p>`,
      author: "Amit Kumar",
      date: "March 20, 2026",
      category: "Web Development",
      readTime: "10 min read",
      icon: "fas fa-code",
      iconColor: "from-indigo-500 to-purple-600",
      tags: ["Full Stack", "Web Development", "Career"]
    }
  ]
};

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'Python', name: 'Python' },
  { id: 'Data Science', name: 'Data Science' },
  { id: 'Cloud', name: 'Cloud' },
  { id: 'DevOps', name: 'DevOps' },
  { id: 'Web Development', name: 'Web Development' },
  { id: 'Cybersecurity', name: 'Cybersecurity' }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { blogs } = blogsData;

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and tutorials in technology
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Search Articles</label>
                <div className="relative">
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search by title, tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Filter by Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid - Only Icons, No Images */}
          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Blog Icon Section - No Image, Only Icon */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-r ${blog.iconColor} flex flex-col items-center justify-center`}>
                    <i className={`${blog.icon} text-6xl text-white/40 mb-3`}></i>
                    <span className="text-white/60 text-sm">{blog.category}</span>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <i className="far fa-calendar-alt"></i> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="far fa-clock"></i> {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <i className="fas fa-user text-gray-500 text-xs"></i>
                        </div>
                        <span className="text-gray-600 text-sm">{blog.author}</span>
                      </div>
                      <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition">
                        Read More <i className="fas fa-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No blog posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 mb-6">Get the latest tech insights and updates delivered to your inbox</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}