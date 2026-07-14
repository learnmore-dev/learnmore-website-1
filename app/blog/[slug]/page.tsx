import BlogPostClient, { blogsData } from './BlogPostClient';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogsData.blogs.find(b => b.slug === params.slug);
  if (!post) {
    return {};
  }

  const title = `${post.title} | Learnmore Technologies Blog`;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `https://learnmore.com/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://learnmore.com/blog/${post.slug}`,
      type: 'article',
    }
  };
}

export default function Page({ params }: BlogPostProps) {
  const post = blogsData.blogs.find(b => b.slug === params.slug);
  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Learnmore Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://learnmore.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://learnmore.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient params={params} />
    </>
  );
}
