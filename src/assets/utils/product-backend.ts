import { type Schema } from "../../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { uploadData, remove } from "aws-amplify/storage";

export const client = generateClient<Schema>();

export type Product = {
  name: string;
  id: string;
  price: number;
  imagePath?: string | null;
  description?: string | null;
  requirement?: string | null;
  dimension?: string | null;
  remark?: string | null;
  code?: string | null;
  version?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export function uploadImage(productID: string, img: File) {
  const res = uploadData({
    data: img,
    path: `productDetails/imgs/${productID}`,
    options: {
      contentType: img.type,
    },
  }).result;
  return res;
}

export function createProduct(product: Product) {
  // drop id, createdAT, updatedAt
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, createdAt, updatedAt, ...rest } = product;
  return client.models.Product.create({
    ...rest,
  });
}

export function updateProduct(product: Product) {
  // drop createdAT, updatedAt
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, ...rest } = product;
  return client.models.Product.update({
    ...rest,
  });
}

export function deleteProduct(productId: string, productImgPath?: string) {
  if (productImgPath) {
    remove({
      path: productImgPath,
    });
  }
  return client.models.Product.delete({
    id: productId,
  });
}

export function modifyImgPath(product: Product, path: string) {
  // drop id, createdAT, updatedAt
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { createdAt, updatedAt, imagePath, ...rest } = product;
  return client.models.Product.update({
    ...rest,
    imagePath: path,
  });
}

export function searchProductByNamePromise(productName: string) {
  return client.models.Product.list({
    filter: {
      name: {
        contains: productName,
      },
    },
    selectionSet: ["name", "id", "imagePath", "price"],
  });
}

export function fetchProductPromise(
  limit: number,
  tk?: string | null | undefined
) {
  return client.models.Product.list({
    selectionSet: ["name", "id", "imagePath", "price"],
    limit: limit,
    nextToken: tk,
  });
}
