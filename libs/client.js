import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ll030t3q1v",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
