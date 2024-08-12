import apiKey from "../api-key.ts";

const BASE_URL = "https://api.krakenflex.systems/interview-tests-mock-api/v1";

const outagesResponse = await fetch(`${BASE_URL}/outages`, {
  headers: { "X-API-Key": apiKey },
});
const outages = await outagesResponse.json();

console.log(outages);
