import { load } from "./load_library.ts";

function clearerr(fp: Deno.PointerValue<unknown>) {
  const { clearerr, library} = load();

  try {
    clearerr();
  } finally {
    library.close();
  }
}

export {
  clearerr
}
