import apiKey from "../api-key.ts";
import BASE_URL from "./base-url.ts";

export async function getOutages() {
  const outagesResponse = await fetch(`${BASE_URL}/outages`, {
    headers: { "X-API-Key": apiKey },
  });

  if (!outagesResponse.ok) {
    throw new Error("Fetch failed");
  }

  const outages = await outagesResponse.json();

  return outages;
}
