import { NextResponse } from "next/server";
import axios from "axios";

const BACKEND_API = process.env.BACKEND_API_URL || "localhost:5432/register";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Send request to backend API
    const response = await axios.post(`${BACKEND_API}/register`, { name, email, password });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.response?.data?.message || "Registration failed" }, { status: error.response?.status || 500 });
  }
}
