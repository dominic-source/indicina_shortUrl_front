import UrlList from '../../components/UrlList';
import Link from 'next/link';

export default function UrlsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-block text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-4 py-2 rounded shadow"
        >
          ← Back to Home
        </Link>
      </div>
      <UrlList />
    </main>
  );
}