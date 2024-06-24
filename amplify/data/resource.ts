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

  // This is for useing OpenSearch
  // searchProducts: a
  //   .query()
  //   .returns(a.ref("Product").array())
  //   .authorization((allow) => [allow.publicApiKey()])
  //   .handler(
  //     a.handler.custom({
  //       entry: "./searchProductResolver.js",
  //       dataSource: "osDataSource",
  //       // dataSource: a.ref("Product"),
  //     })
  //   ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
