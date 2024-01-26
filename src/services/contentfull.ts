import { createClient } from "contentful";

function _createClient() {
  const client = createClient({
    space: process.env.CONTENTFULL_SPACE as string,
    environment: process.env.CONTENTFULL_ENV as string,
    accessToken: process.env.CONTENTFULL_ACCESSTOKEN as string,
  });

  return client;
}

export default async function getEntry<T>(entryId: string): Promise<T> {
  const client = _createClient();

  const data = await client.getEntry(entryId);

  return data.fields as T;
}

export async function getEntries<T>(contentType: string): Promise<T> {
  const client = _createClient();

  const data = await client.getEntries({
    content_type: contentType,
  });

  return data as T;
}
