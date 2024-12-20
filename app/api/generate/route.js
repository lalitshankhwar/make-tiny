import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("maketiny");
    const collection = db.collection("url");

    //check if short url exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "URL already Exist ",
      });
    }
    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated",
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: true,
      message: "Somthing Went ",
    });
  }
}
