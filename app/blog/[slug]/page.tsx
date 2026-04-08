import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import blogsData from '@/data/blogs.json';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogsData.blogs.find(b => b.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-red-600 mb-6 hover:underline">
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>

          {/* Blog Article */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header Image */}
            <div className="h-64 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <i className="fas fa-newspaper text-6xl text-white/50"></i>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b">
                <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <i className="far fa-user"></i> {post.author}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <i className="far fa-calendar-alt"></i> {post.date}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <i className="far fa-clock"></i> {post.readTime}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              {/* Content */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
                <p className="text-gray-700 leading-relaxed">
                  This is a detailed blog post about {post.title}. In a real implementation, 
                  this would contain the full article content with rich formatting, images, 
                  and more detailed information about the topic.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The article would cover various aspects including industry trends, 
                  best practices, case studies, and actionable insights for readers.
                </p>
              </div>
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-3">Share this article:</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}