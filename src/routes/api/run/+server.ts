import type { RequestHandler } from "@sveltejs/kit";
import ky from "ky";
import { SERVER_URL } from '$env/static/private';
 
export const POST = (async ({ request }) => {
  const { code, idx, type } = await request.json();

  console.log(SERVER_URL);

  const res = await ky.post(SERVER_URL, {
    json: { code, idx, type },
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.statusText}`);
  }

  return await res.json();
  
}) satisfies RequestHandler;