import { load } from "./load_library.ts";

function perror(s: Uint8Array): number {
  const { perror, library} = load();

  let result: number;
  try {
    result = perror(s);
  } finally {
    library.close();
  }

  return result;
}

export {
  perror
}
