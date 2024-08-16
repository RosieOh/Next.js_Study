```bash
ReferenceError: module is not defined in ES module scope
    at file:///Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/next.config.mjs:6:1
    at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadConfig (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/config.js:698:36)
    at async initialize (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/lib/router-server.js:54:20)
    at async Server.<anonymous> (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/lib/start-server.js:249:36)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
(base)  ✘ otaehun@otaehun-ui-MacBookAir  ~/Desktop/DevOps_Rosie/Next.js_Study/pwa-next   main ±  yarn start
yarn run v1.22.22
$ next start
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000

 ✓ Starting...
 ⨯ Failed to load next.config.mjs, see more info here https://nextjs.org/docs/messages/next-config-error
ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/next.config.mjs:4:21
    at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadConfig (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/config.js:698:36)
    at async initialize (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/lib/router-server.js:54:20)
    at async Server.<anonymous> (/Users/otaehun/Desktop/DevOps_Rosie/Next.js_Study/pwa-next/node_modules/next/dist/server/lib/start-server.js:249:36)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run f
```

> ES Module(ESM) 환경에서 발생하는 문제

- Next.js 13 이상에서는 next.config.mjs 파일이 ES Module로 동작하며, 이 환경에서는 require와 module.exports를 사용할 수 없습니다. 대신, import와 export 구문을 사용해야 함
