'use client';

import { useState, useEffect } from 'react';
import { listUrls } from '@/lib/apiClient';
import { UrlEntryType } from '@/lib/types';
import UrlItem from '@/components/UrlItem';
// import SearchBar from '@/components/SearchBar';

export default function UrlList() {

  const [urls, setUrls] = useState<UrlEntryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUrls = async (search?: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await listUrls();
      console.log('URLs loaded:', data);
      setUrls(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load URLs');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUrls();
  }, []);

//   const handleSearch = (query: string) => {
//     console.log('loadUrls called');

//     loadUrls(query);
//   };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Your Short URLs</h1>
      
      {/* <SearchBar onSearch={handleSearch} /> */}
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      ) : urls.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No URLs found. Create your first short URL!
        </div>
      ) : (
        <div className="space-y-4">
          {urls.map((url) => (
            <UrlItem key={url.longUrl} url={url} />
          ))}
        </div>
      )}
    </div>
  );
}