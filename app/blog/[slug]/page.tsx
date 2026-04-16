'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useEnroll } from '@/context/EnrollContext';
import blogsData from '@/data/blogs.json';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const { openEnrollModal } = useEnroll();
  const { blogs } = blogsData;
  const post = blogs.find(b => b.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs.filter(b => b.category === post.category && b.id !== post.id).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section with Background Image - No Overlay Color */}
        <section className="relative py-24 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Blog Hero"
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
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="bg-black/30 backdrop-blur px-3 py-1 rounded-full text-sm">{post.category}</span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <i className="far fa-clock text-xs"></i> {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">{post.title}</h1>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white text-lg"></i>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-white/80">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Featured Image Placeholder */}
                <div className="relative h-80 rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-newspaper text-6xl text-gray-300 mb-3"></i>
                    <p className="text-gray-400">Featured Image</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">{post.content}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Key Takeaways</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li className="text-gray-700">Practical insights from industry experts with real-world examples</li>
                    <li className="text-gray-700">Actionable tips and strategies for career growth</li>
                    <li className="text-gray-700">Latest trends and technologies in the industry</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-xl">
                    <p className="text-blue-800 italic">
                      "This article provides valuable insights that can help you advance your career in tech."
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold mb-3 text-gray-700">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-2xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{post.author}</h4>
                      <p className="text-gray-500 text-sm">{post.authorRole}</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Expert in {post.category} with over 8 years of industry experience. Passionate about teaching and mentoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* About Card */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl shadow-lg p-6 text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-graduation-cap text-white text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Learnmore Technologies</h3>
                <p className="text-white/80 text-sm mb-4">
                  India's leading software training institute with 100% placement assistance.
                </p>
                <button 
                  onClick={() => openEnrollModal()}
                  className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
                >
                  Enroll Now
                </button>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <i className="fas fa-fire text-orange-500"></i> Popular Posts
                </h3>
                <div className="space-y-4">
                  {blogs.slice(0, 4).map((blog) => (
                    <Link key={blog.id} href={`/blog/${blog.slug}`} className="flex gap-3 group">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition">
                        <i className="fas fa-file-alt text-gray-400 group-hover:text-blue-500"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <i className="fas fa-folder-open text-blue-500"></i> Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blogsData.categories.filter(c => c.slug !== 'all').map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/blog?category=${cat.slug}`}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      {cat.name} ({cat.count})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <i className="fas fa-link text-blue-500"></i> Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                      <i className="fas fa-file-alt text-4xl text-gray-300 group-hover:scale-110 transition"></i>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1 text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-xs">{blog.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8">Join our courses and become a certified professional</p>
            <button 
              onClick={() => openEnrollModal()}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1"
            >
              Explore Courses
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}