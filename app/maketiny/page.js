"use client";
import Link from "next/link";
import { useState } from "react";

export default function MakeShort() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [resUrl, setResUrl] = useState(null);

  const generate = async () => {
    if (url && shortUrl) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}api/generate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url,
              shortUrl,
            }),
          }
        );
        const res = await response.json();
        if (res.success) {
          setShortUrl("");
          setUrl("");
          setResUrl(shortUrl);
          alert(res.message);
        } else {
          alert(res.message);
        }
      } catch (error) {
        alert("Somthing Went Wrong");
      }
    } else {
      alert("Please enter URL");
    }
  };
  return (
    <div className="bg-purple-200 mx-auto max-w-lg my-10 p-10 rounded-md">
      <h1 className="text-2xl font-bold text-center">Make your URL Tiny</h1>
      <input
        type="text"
        className="mt-5 w-full p-2 rounded-md text-gray-500 focus:border- focus:outline-purple-700 border-purple-700"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        className="mt-5 w-full p-2 rounded-md text-gray-500 focus:border- focus:outline-purple-700 border-purple-700"
        placeholder="Enter short URL"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
      />
      <button
        onClick={generate}
        className="mt-3 bg-purple-600 w-full p-2 rounded-md text-white font-bold"
      >
        Generate
      </button>
      {resUrl && (
        <div className="mt-5 flex gap-2 items-center">
          <span className="font-bold text-lg">Your Link : </span>
          <Link
            className="underline"
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_HOST}${resUrl}`}
          >
            {`${process.env.NEXT_PUBLIC_HOST}${resUrl}`}
          </Link>
        </div>
      )}
    </div>
  );
}
