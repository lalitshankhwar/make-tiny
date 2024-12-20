import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const shortUrl = (await params).shortUrl;
  console.log(shortUrl);
  const client = await clientPromise;
  const db = client.db("maketiny");
  const collection = db.collection("url");
  const doc = await collection.findOne({ shortUrl });
  console.log("URL", doc);
  if (doc) {
    redirect(`${doc.url}`);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
