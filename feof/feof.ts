import { load } from "./load_library.ts";

function feof(fp: Deno.PointerValue<unknown>): number {
  const { feof, library} = load();

  let result: number;
  try {
    result = feof();
  } finally {
    library.close();
  }

  return result;
}

export {
  feof
}
