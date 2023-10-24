import { load } from "./load_library.ts";

function ferror(fp: Deno.PointerValue<unknown>): number {
  const { ferror, library} = load();

  let result: number;
  try {
    result = ferror();
  } finally {
    library.close();
  }

  return result;
}

export {
  ferror
}
