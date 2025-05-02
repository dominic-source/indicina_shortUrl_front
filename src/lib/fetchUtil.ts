import { FetchOptions, FetchConfig } from "@/lib/types";

export const fetchUtils = <TRequestBody>(conf: FetchConfig) => {
  const {
    baseUrl,
    endpoint: initEndpoint = "",
    method: initMethod = "GET",
  } = conf;

  // More default headers can be added later
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return async (config?: FetchOptions<TRequestBody>) => {
    const {
      endpoint = initEndpoint,
      method = initMethod,
      headers = {},
      ...restOptions
    } = config || {};

    const transformedBasedUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const transformedEndpoint = initEndpoint.startsWith("/")
      ? endpoint.slice(1)
      : endpoint;

    // Check if default headers is already defined in headers and update
    const finalHeaders = { ...defaultHeaders, ...headers };
    const url = `${transformedBasedUrl}${transformedEndpoint}`;

    const options = {
      method,
      headers: finalHeaders,
      ...restOptions,
      body: restOptions.body ? JSON.stringify(restOptions.body) : undefined,
    };

    return fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
      return response.json();
    });
  };
};
