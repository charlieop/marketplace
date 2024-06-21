import { type Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

export const client = generateClient<Schema>();

export type Product = {
  name: string;
  id: string;
  price: number;
  imagePath?: string | null;
};

export async function searchProductByNamePromise(productName: string) {
  return await client.models.Product.list({
    filter: {
      name: {
        contains: productName,
      },
    },
    selectionSet: ["name", "id", "imagePath", "price"],
  });
}

export async function fetchProductPromise(
  limit: number,
  tk?: string | null | undefined
) {
  return client.models.Product.list({
    selectionSet: ["name", "id", "imagePath", "price"],
    limit: limit,
    nextToken: tk,
  });
}
