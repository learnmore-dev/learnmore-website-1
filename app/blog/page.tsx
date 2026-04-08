import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import blogsData from '@/data/blogs.json';

export default function BlogPage() {
  const { blogs } = blogsData;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our <span className="text-red-500">Blog</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in technology and education.
              Read expert articles, success stories, and industry updates.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogs.map((blog: any) => (
              <Link 
                key={blog.id} 
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Blog Image Placeholder */}
                <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
                  <i className="fas fa-newspaper text-5xl text-white/50"></i>
                </div>
                
                {/* Blog Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <i className="far fa-clock"></i> {blog.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-user-circle text-gray-400"></i>
                      <span className="text-gray-500 text-sm">{blog.author}</span>
                    </div>
                    <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                      Read More <i className="fas fa-arrow-right group-hover:translate-x-1 transition"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}