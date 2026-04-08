'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn primary-btn">Try Again</button>
          <Link href="/" className="btn secondary-btn">Go Home</Link>
        </div>
      </div>
    </div>
  );
}