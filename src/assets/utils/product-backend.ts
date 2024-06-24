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
  // res.then((result) => {
  //   console.log("upload result: ", result);
  //   modifyPath(result.path);
  //   setImg(null);
  //   setProduct((prev) => {
  //     if (prev) {
  //       return {
  //         ...prev,
  //         imagePath: result.path,
  //       };
  //     }
  //     return prev;
  //   });
  // });
}

export function createProduct(
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
) {
  // drop id, createdAT, updatedAt
  return client.models.Product.create({
    ...product,
  });
  // .then((res) => {
  //   console.log("createProduct: ", res);
  //   if (res.data) {
  //     navigate(`/product-details/${res.data.id}`);
  //   }
  //   setProduct(res.data ?? undefined);
  // });
}

export function updateProduct(
  product: Omit<Product, "createdAt" | "updatedAt">
) {
  return client.models.Product.update({
    ...product,
  });
  // .then((res) => {
  //   console.log("updateProduct: ", res);
  //   setProduct(res.data ?? undefined);
  // });
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
  //   .then((res) => {
  //     console.log("deleted:", res);
  //     setProduct(undefined);
  //   });
  // }
  // navigate("/products");
}

export function modifyImgPath(productID: string, path: string) {
  return client.models.Product.update({
    id: productID,
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
