## Run

```bash
$ npm install

$ npm run build:dev
$ npm run build:prod
```

## Fix for Node:

Webpack 5 seems to only compile WebWorkers using a DOM URL, not Node Worker Threads when using a Node URL to point to the file.
The latest commit shows it successfully compiling by casting the URL type and importing the DOM lib in tsconfig.

## Previously

You'll see the dist folder contains an uncompiled .ts file, showing that webpack is not compiling worker threads written in TypeScript.
Whereas the [parent repository](https://github.com/azangru/web-worker-ts-webpack-test) will build with a compiled .js webworker file.

Switching between ts-loader and babel has no affect.
