import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Product: a
    .model({
      code: a.string(),
      name: a.string().required(),
      version: a.string(),
      description: a.string(),
      dimension: a.string(),
      remark: a.string(),
      price: a.float().required(), // price in HKdollars
      requirement: a.string(),
      imagePath: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.authenticated("identityPool"),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
  },
});
