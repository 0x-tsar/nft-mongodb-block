// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "./mongodb";

export default async (req, res) => {
  const { method, query } = req;

  console.log(method);
  console.log(req.body);

  const { db } = await connectToDatabase();
  if (method === "GET") {
    const data = await db.collection("Customers").find().toArray();
    res.status(200).json(data);
  } else if (method === "POST") {
    const data = await db.collection("Customers").insertOne(req.body);
    res.status(200).json(data);
  }
  console.log(data);

  // const url = "mongodb://localhost:27017";
  // const client = new MongoClient(url);

  // await client.connect();
  // console.log("Connected successfully to server");
  // const db = client.db("test");

  // const data = await db.collection("faqs").find().toArray();
  // const data_parsed = JSON.parse(JSON.stringify(data));
};
