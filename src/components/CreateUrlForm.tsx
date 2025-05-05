"use client";

import { useEffect, useRef, useState } from "react";
import { createShortUrl } from "@/lib/apiClient";

export default function CreateUrlForm({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await createShortUrl({ body: { longUrl } });
      setShortUrl(result.shortUrl);
      setLongUrl("");
      timeoutRef.current = setTimeout(() => {
        onSuccess();
        setShortUrl(null);
      }, 10000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="longUrl"
            className="block text-sm font-medium text-gray-800 mb-1"
          >
            Enter the Long URL
          </label>
          <input
            type="url"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="https://example.com/very-long-url"
            className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? "Creating..." : "Shorten URL"}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          <p className="font-medium">Short URL created!</p>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
