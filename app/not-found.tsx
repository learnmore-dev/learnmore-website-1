import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn primary-btn">
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}