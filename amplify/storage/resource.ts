import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "productFiles",
  access: (allow) => ({
    "productDetails/imgs/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["write", "delete", "read"]),
    ],
    // removed the OpenSearch access control
    // "public/*": [allow.guest.to(["list", "write", "get"])],
  }),
});
