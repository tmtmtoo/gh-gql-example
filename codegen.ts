import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://docs.github.com/public/schema.docs.graphql",
  documents: "src/operations/**/*.graphql",
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
    },
  },
  config: {
    scalars: {
      Base64String: "string",
      BigInt: "string",
      Date: "string",
      DateTime: "string",
      GitObjectID: "string",
      GitRefname: "string",
      GitSSHRemote: "string",
      GitTimestamp: "string",
      HTML: "string",
      PreciseDateTime: "string",
      URI: "string",
      X509Certificate: "string",
    },
  },
};

export default config;
