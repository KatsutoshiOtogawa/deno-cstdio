import { load } from "./load_library.ts";

function tmpfile(): Deno.PointerValue<unknown> {
    const { tmpfile, library} = load();

    let fp: Deno.PointerValue = null;
    try {
      fp = tmpfile();
    } finally {
      library.close();
    }
    return fp;
}

export {
  tmpfile
}
