import { load } from "./load_library.ts";

/**
 * 
 * @param fp 
 * @returns 成功なら0, 失敗ならEOF。
 */
function fseek(stream: Deno.PointerValue<unknown>, offset: number, whence: number): number {
  const { fseek, library} = load();

  let result: number;
  try {
    result = fseek(stream, offset, whence);
  } finally {
    library.close();
  }
  return result;
}

export {
  fseek
}
