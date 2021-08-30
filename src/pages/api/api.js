import { connectToDatabase } from "../components/mongodb";

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
};
