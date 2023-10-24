import { load } from "./load_library.ts";
import { EOF } from "../EOF/EOF.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function fgetpos(fp: Deno.PointerValue<unknown>, pos: Deno.PointerValue<unknown>): number {
  const { fgetpos, library} = load();

  let result = EOF;
  try {
    result = fgetpos(fp, pos);
  } finally {
    library.close();
  }
  return result;
}

export {
  fgetpos
}
