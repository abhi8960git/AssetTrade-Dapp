import fs from "fs";
import path from "path";

export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { walletAddr } = req.body;

    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    const landowner = data.landowners.find((l: any) => l.wallet_addr === walletAddr);

    if (landowner) {
      res.status(200).json(landowner);
    } else {
      res.status(404).json({ message: "Landowner not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

// Due to time shortage we decided to not create a decidated backend so using fs r/w operations
