import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), "public/images/gallery");
    
    // Check if directory exists
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ images: [] });
    }

    const filenames = fs.readdirSync(galleryDir);

    // Filter only image extensions (.jpg, .jpeg, .png, .webp)
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".svg"];
    const images = filenames
      .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => ({
        src: `/images/gallery/${file}`,
        alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        category: "Exhibition Floor", // Default category
      }));

    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read gallery images" }, { status: 500 });
  }
}