"use client";

import { useState } from "react";
import CreateUrlForm from "../components/CreateUrlForm";
import Link from "next/link";

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-600">
            Create a short and easy to remember links
          </p>
        </div>

        <CreateUrlForm key={refreshKey} onSuccess={handleSuccess} />

        <div className="mt-8 text-center">
          <Link href="/urls" className="text-blue-600 hover:underline">
            View all your short URLs →
          </Link>
        </div>
      </div>
    </main>
  );
}
