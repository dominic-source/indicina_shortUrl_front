import Link from 'next/link';
import { UrlEntryType } from '../lib/types';
import { formatDistanceToNow } from 'date-fns';

export default function UrlItem({ url }: { url: UrlEntryType }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-transform duration-200 hover:scale-105 active:scale-105">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 mb-1">
            Created {formatDistanceToNow(new Date(url.createdAt), { addSuffix: true })}
          </p>
          <p className="text-lg font-medium text-gray-900 truncate mb-1">
            {url.longUrl}
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={url.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {url.shortUrl}
            </Link>
            <span className="text-xs bg-red-400 px-2 py-1 rounded">
              {url.visits} {parseInt(url.visits) === 1 ? 'visit' : 'visits'}
            </span>
          </div>
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(url.shortUrl)}
          className="ml-2 p-2 text-gray-400 hover:text-gray-600"
          title="Copy to clipboard"
        >
          ⎘
        </button>
      </div>
    </div>
  );
}
