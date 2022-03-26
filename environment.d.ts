declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      POSTSQL_PASSWORD: string;
    }
  }
}

export {};
