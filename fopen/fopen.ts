import { load } from "./load_library.ts";

/**
 * 
 * @param filename 
 * @param mode 
 * @returns {Deno.PointerValue<unknown>} 失敗すると NULL pointerが帰る。
 */
function fopen(filename: Uint8Array, mode: Uint8Array): Deno.PointerValue<unknown> {
    const { fopen, library} = load();

    let fp: Deno.PointerValue = null;
    try {
      fp = fopen(filename, mode);
    } finally {
      library.close();
    }
    return fp;
}

export {
  fopen
}
