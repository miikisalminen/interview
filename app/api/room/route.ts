import { query } from "../../../lib/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route GET /api/room/{code}
 * @description Retrieve room data with code
 * @access Public
 * @param code
 *
 * @returns 200 - Room data, empty if not found
 *
 * @example Request:
 *  GET /api/room/ABC123
 *
 * @example Response:
 *  {
 *  	"id": int,
 *  	"name": string,
 *  	"code": string,
 *  	"created_at": Unix timestamp,
 *  	"updated_at": Unix timestamp
 *  }
 */
export async function GET(req: NextRequest, code: string | null) {
  code = req.nextUrl.searchParams.get("code");

  const { rows } = await query("SELECT * FROM rooms WHERE code = $1", [code]);

  const res = NextResponse.json({ rows });
  console.log(res);
  return res;
}
