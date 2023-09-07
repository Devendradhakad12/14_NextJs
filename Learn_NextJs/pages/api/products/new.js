import { Product } from "@model/product";
import { connectdb } from "@utils/db";

export default async function POST(req, res) {
  await connectdb();
  
  if (req.method === "POST") {
    const { name, price, category } = req.body;
    if (name !== undefined && price !== undefined && category !== undefined) {
      await Product.create({
        name,
        price,
        category,
      });

      res.status(201).json({ success: true, message: "Product Created" });
    } else {
      res.status(400).json({ success: false, message: "All Fields required" });
    }
  } else {
    res.status(400).json({ success: false, message: "req error" });
  }
}
