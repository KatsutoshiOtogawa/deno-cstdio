import { load } from "./load_library.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function getc(fp: Deno.PointerValue<unknown>): number {
  const { getc, library} = load();

  let result: number;
  try {
    result = getc(fp);
  } finally {
    library.close();
  }
  return result;
}

export {
  getc
}
