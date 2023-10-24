import { load } from "./load_library.ts";

function rewind(fp: Deno.PointerValue<unknown>) {
  const { rewind, library} = load();

  try {
    rewind();
  } finally {
    library.close();
  }
}

export {
  rewind
}
