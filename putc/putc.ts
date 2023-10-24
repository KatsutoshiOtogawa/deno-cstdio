import { load } from "./load_library.ts";
import { EOF } from "../EOF/EOF.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function putc(c: number, fp: Deno.PointerValue<unknown>): number {
  const { putc, library} = load();

  let result = EOF;
  try {
    result = putc(c, fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  putc
}
