"use client";

import { useState, useEffect, useMemo } from "react";
import debounce from 'lodash.debounce';

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const debouncedOnSearch = useMemo(
    () => debounce((query: string) => onSearch(query), 300),
    [onSearch]
  );

  useEffect(() => {
    if (query.length >= 3 || query.length === 0) {
      debouncedOnSearch(query);
    }
    // Cleanup debounce on unmount
    return () => {
      debouncedOnSearch.cancel();
    };
  }, [query, debouncedOnSearch]);

  return (
    <div className="mb-6">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search URLs (min 3 characters)..."
          className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
