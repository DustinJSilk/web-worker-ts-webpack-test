import { expose } from 'comlink';
import { test } from './extra';

const someSillyFunction = async () => {
  return await Promise.resolve(42 + test);
};

const workerApi = {
  someSillyFunction
};

export type WorkerApi = typeof workerApi;

expose(workerApi);
