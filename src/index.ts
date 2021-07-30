import { Worker } from "worker_threads";
import { URL as NodeURL } from "url";

const test = async () => {
  const worker = new Worker(
    new URL("./workers/foo.worker.ts", import.meta.url) as NodeURL
  );

  console.log(worker);
};

test();
