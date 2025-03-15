import { NextResponse } from "next/server";
import axios from "axios";

const BACKEND_API = process.env.BACKEND_API_URL || "localhost:5432/login";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Call backend login API
    const response = await axios.post(`${BACKEND_API}/login`, { email, password });

    // Store token in cookies (Optional)
    const headers = new Headers();
    headers.append("Set-Cookie", `token=${response.data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`);

    return NextResponse.json({ token: response.data.token }, { status: 200, headers });
  } catch (error: any) {
    return NextResponse.json({ error: error.response?.data?.message || "Login failed" }, { status: error.response?.status || 500 });
  }
}
