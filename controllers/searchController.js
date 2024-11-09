import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchResidency = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    // Search using Prisma
    const results = await prisma.residency.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive", // Case-insensitive search
        },
      },
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
