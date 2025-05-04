type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export interface FetchOptions<TRequestBody>
  extends Omit<RequestInit, "body" | "method"> {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: TRequestBody;
  params?: Record<string, string>;
  endpoint?: string;
}

export interface FetchConfig {
  baseUrl: string;
  endpoint?: string;
  method?: string;
}

export interface UrlEntryType {
  longUrl: string;
  shortUrl: string;
  createdAt: string;
  visits: string;
  lastVisited?: string;
}
