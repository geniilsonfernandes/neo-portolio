import { Client } from "@notionhq/client";

const databaseId = "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";
// Initializing a client
const notion = new Client({
  auth: "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",
});

export { notion };
