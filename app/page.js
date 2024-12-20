import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 container mx-auto">
      <section className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex justify-center items-center mx-4">
          <div className="text-center mt-10 lg:mt-0 lg:text-start">
            <p className="md:text-4xl text-5xl font-bold">
              Shorten, Share, Simplify
            </p>
            <p className="text-lg mt-1">
              Transform long links into concise, shareable URLs instantly and
              effortlessly.
            </p>
            <Link href={"/maketiny"}>
              <button className=" bg-purple-500 px-3 py-2 mt-3 text-white rounded-md font-bold">
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <Image
            className="mix-blend-darken"
            alt="vector"
            src={"/59902.jpg"}
            width={600}
            height={400}
          />
        </div>
      </section>
    </main>
  );
}
