import {SITES, TESTS} from "../utils/constants..ts";

import {Site, Test} from "../utils/interfaces.ts";

async function getSites(): Promise<Site[]> {
  const response = await fetch(SITES);
  return await response.json();
}

async function getTests(): Promise<Test[]> {
  const response = await fetch(TESTS);
  return await response.json();
}

export { getSites, getTests };
