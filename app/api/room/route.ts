import { query } from "../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  const { rows } = await query("SELECT * FROM rooms WHERE code = $1", [code]);

  const res = NextResponse.json({ rows });
  console.log(res);
  return res;
}
