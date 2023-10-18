import { load } from "./load_library.ts";
import { EOF } from "../EOF/EOF.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function fputs(buf: Uint8Array,fp: Deno.PointerValue<unknown>): number {
  const { fputs, library} = load();

  let result = EOF;
  try {
    result = fputs(buf, fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  fputs
}
