// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createTodo } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await createTodo(data);
    return res.status(200).json(data);
  }
  res.status(500).json({ message: "500" });
}
