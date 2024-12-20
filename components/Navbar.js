import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-purple-800">
      <nav className=" h-16 flex items-center justify-between px-4 container mx-auto">
        <div className="text-2xl font-bold text-white">
          <Link href={"/"}>MakeTiny</Link>
        </div>
        <ul className="flex items-center justify-center gap-3 text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/maketiny"}>
              <button className="px-3 bg-purple-500 py-1 rounded-md hover:bg-purple-600">
                Try Now
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
