import { Worker } from "worker_threads";
import { URL } from "url";

const test = async () => {
  const worker = new Worker(
    new URL("./workers/foo.worker.ts", import.meta.url)
  );
  console.log(worker);
};

test();
