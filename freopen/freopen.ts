import { load } from "./load_library.ts";

function freopen(filename: Uint8Array, mode: Uint8Array, stream: Deno.PointerValue<unknown>): Deno.PointerValue<unknown> {
    const { freopen, library} = load();

    let fp: Deno.PointerValue = null;
    try {
      fp = freopen(filename, mode, stream);
    } finally {
      library.close();
    }
    return fp;
}

export {
  freopen
}
