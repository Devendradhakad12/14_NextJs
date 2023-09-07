import { Product } from "@model/product";
import { connectdb } from "@utils/db";

export default async function handler(req, res) {
  await connectdb();
  
  if (req.method === "GET") {
    const product = await Product.find({});
    res.status(200).json({ success: true, product });
  } else {
    res.status(400).json({ success: false, message: "req error" });
  }
}
