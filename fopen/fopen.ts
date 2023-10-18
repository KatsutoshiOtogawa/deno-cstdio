import { load } from "./load_library.ts";
import { NULL } from "../NULL/NULL.ts";

/**
 * 
 * @param filename 
 * @param mode 
 * @returns {Deno.PointerValue<unknown>} 失敗すると NULL pointerが帰る。
 */
function fopen(filename: Uint8Array, mode: Uint8Array): Deno.PointerValue<unknown> {
    const { fopen, library} = load();

    let fp: Deno.PointerValue = NULL;
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
