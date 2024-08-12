import { getOutages } from "./get-outages.ts";

export default async function run() {
  const outages = await getOutages();

  console.log(outages);

  return outages;
}

run();
