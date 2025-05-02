import { BASE_URL } from "@/lib/constants";
import { fetchUtils } from "./fetchUtil";

export const decodeShortUrl = fetchUtils({
  baseUrl: BASE_URL,
  endpoint: "/api/decode",
  method: "POST",
});
export const createShortUrl = fetchUtils({
  baseUrl: BASE_URL,
  endpoint: "/api/encode",
  method: "POST",
});
export const getStats = fetchUtils({ baseUrl: BASE_URL });
export const listUrls = fetchUtils({
  baseUrl: BASE_URL,
  endpoint: "/api/list",
});
