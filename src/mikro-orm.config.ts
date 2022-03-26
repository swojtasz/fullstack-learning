import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    // pathTs: undefined,
    glob: "!(*.d).{js,ts}",
  },
  entities: ["./dist/entities"],
  // entitiesTs: ["./src/entities"],
  dbName: "fullstacklearning",
  type: "postgresql",
  debug: !__prod__,
  password: process.env.POSTSQL_PASSWORD,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
