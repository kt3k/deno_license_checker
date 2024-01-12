// Copyright 2020-2022 Yoshiya Hinosawa. All rights reserved. MIT license.

import http from "node:http";

export default function () {
  // deno-lint-ignore no-explicit-any
  const server = http.createServer((_req: any, res: any) => {
    res.end(JSON.stringify({
      "**/*.js": "Copyright js haha",
      "**/*.ts": "Copyright ts",
    }));
  });
  server.listen(8000);
  return () => {
    return new Promise<void>((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  };
}
