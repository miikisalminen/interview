"use server";

import { query } from "../lib/db";

export async function createRoom(data: FormData) {
  const name = data.get("name");
  const code = await generateUniqueCode();
  await query('INSERT INTO "rooms" (name, code) VALUES ($1, $2)', [name, code]);
}

function generateCode(): string {
  const chars = "ABCD0123";
  let res = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    res += chars.charAt(randomIndex);
  }
  return res;
}

async function generateUniqueCode(): Promise<string> {
  let code = "";
  let isUnique = false;

  while (!isUnique) {
    code = generateCode();
    const { rows } = await query("SELECT COUNT(*) FROM rooms WHERE code = $1", [
      code,
    ]);
    isUnique = rows[0].count === "0";
  }
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(code);
    }, 1000);
  });
}
