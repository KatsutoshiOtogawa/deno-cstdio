import { load } from "./load_library.ts";

function fgetc(fp: Deno.PointerValue<unknown>): number {
  const { fgetc, library} = load();

  let result: number;
  try {
    result = fgetc(fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  fgetc
}
