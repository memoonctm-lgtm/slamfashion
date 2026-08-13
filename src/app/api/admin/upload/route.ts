import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

const MAX_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
]);
const ALLOWED_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "gif"]);
const ALLOWED_FOLDERS = new Set(["products", "brand", "collections"]);

function sanitizeExtension(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "jpg";
  return ALLOWED_EXTENSIONS.has(ext) ? ext : "jpg";
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token || !verifySessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const folderRaw = formData.get("folder");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Use JPG, PNG, WEBP, or GIF." },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 5MB." },
        { status: 400 }
      );
    }

    const folder =
      typeof folderRaw === "string" && ALLOWED_FOLDERS.has(folderRaw)
        ? folderRaw
        : "products";

    const extension = sanitizeExtension(file.name);
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`;
    const directory = path.join(process.cwd(), "public", "images", folder);
    await mkdir(directory, { recursive: true });

    const bytes = await file.arrayBuffer();
    await writeFile(path.join(directory, filename), Buffer.from(bytes));

    return NextResponse.json({ url: `/images/${folder}/${filename}` });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
