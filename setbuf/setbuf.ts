import { load } from "./load_library.ts";

function setbuf(stream: Deno.PointerValue<unknown>, buf: Uint8Array) {
    const { setbuf, library} = load();

    try {
      setbuf(stream, buf);
    } finally {
      library.close();
    }
}

export {
  setbuf
}
