import { NextResponse } from "next/server";
import axios from "axios";

const BACKEND_API = process.env.BACKEND_API_URL || "https://your-backend.com/api/auth";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Call backend API for user details
    const response = await axios.get(`${BACKEND_API}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Invalid token or unauthorized" }, { status: 401 });
  }
}
