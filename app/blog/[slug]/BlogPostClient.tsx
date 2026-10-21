'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { blogsData } from '@/app/blog/blogData';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  
  // Find the post by slug
  const post = blogsData.blogs.find(b => b.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData.blogs
    .filter(b => b.category === post.category && b.id !== post.id)
    .slice(0, 3);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-gray-800 truncate">{post.title}</span>
          </div>

          {/* Blog Header with Icon */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className={`relative h-64 md:h-80 overflow-hidden bg-gradient-to-r ${post.iconColor} flex flex-col items-center justify-center`}>
              <i className={`${post.icon} text-8xl text-white/30 mb-4`}></i>
              <span className="text-white/50 text-lg">{post.category}</span>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/60 to-transparent">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1">
                    <i className="far fa-calendar-alt"></i> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-clock"></i> {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-user"></i> By {post.author}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold text-gray-700">Tags:</span>
                {post.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/blog?tag=${tag}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Like and Share */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isLiked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                }`}
              >
                <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
                <span>{likeCount} Likes</span>
              </button>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Share:</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                    <i className="fab fa-facebook-f text-xs"></i>
                  </button>
                  <button className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition">
                    <i className="fab fa-twitter text-xs"></i>
                  </button>
                  <button className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition">
                    <i className="fab fa-whatsapp text-xs"></i>
                  </button>
                  <button className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition">
                    <i className="fab fa-linkedin-in text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {post.author} is a technology expert and trainer at Learnmore Technologies with extensive experience in the IT industry.
                </p>
                <div className="flex justify-center md:justify-start gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className={`relative h-40 overflow-hidden bg-gradient-to-r ${related.iconColor} flex items-center justify-center`}>
                      <i className={`${related.icon} text-5xl text-white/30`}></i>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-400 mb-2">{related.date}</p>
                      <h3 className="font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}