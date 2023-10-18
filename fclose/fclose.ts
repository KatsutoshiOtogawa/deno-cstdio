import { load } from "./load_library.ts";
import { EOF } from "../EOF/EOF.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function fclose(fp: Deno.PointerValue<unknown>): number {
  const { fclose, library} = load();

  let result = EOF;
  try {
    result = fclose(fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  fclose
}
