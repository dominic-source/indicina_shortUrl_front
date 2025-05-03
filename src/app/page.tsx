'use client'

import CreateUrlForm from "@/components/CreateUrlForm";

export default function Home() {
  return (
    <div className="">
      This is the first page of the URL Shortener app. You can create short URLs
      and manage them here.
      <CreateUrlForm onSuccess={() => console.log("URL created successfully!")} />
    </div>
  );
}
