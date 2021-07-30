## Run

```bash
$ npm install

$ npm run build:dev
$ npm run build:prod
```

You'll see the dist folder contains an uncompiled .ts file, showing that webpack is not compiling worker threads written in TypeScript.
Whereas the [parent repository](https://github.com/azangru/web-worker-ts-webpack-test) will build with a compiled .js webworker file.

Switching between ts-loader and babel has no affect.
