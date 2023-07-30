import { GraphQLClient } from "graphql-request";
import { MeDocument } from "./generated/graphql";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: { Authorization: `Bearer ${process.env.PAT}` },
});

async function main() {
  const me = await client.request(MeDocument, {});
  console.log(me);
}

main();
