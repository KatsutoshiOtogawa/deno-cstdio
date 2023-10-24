import { load } from "./load_library.ts";
import { EOF } from "../EOF/EOF.ts";

function ungetc(c: number, fp: Deno.PointerValue<unknown>): number {
  const { ungetc, library} = load();

  let result = EOF;
  try {
    result = ungetc(c, fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  ungetc
}
