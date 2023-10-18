import { load } from "./load_library.ts";
import { NULL } from "../NULL/NULL.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function fgets(buf: Uint8Array,n: number,fp: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
  const { fgets, library} = load();

  let result: Deno.PointerValue<unknown> =  NULL;
  try {
    result = fgets(buf, n, fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  fgets
}
