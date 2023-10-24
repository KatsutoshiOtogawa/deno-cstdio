import { load } from "./load_library.ts";

function rename(old_filename: Uint8Array, new_filename: Uint8Array): number {
    const { rename, library} = load();

    let result: number;
    try {
      result = rename(old_filename, new_filename);
    } finally {
      library.close();
    }
    return result;
}

export {
  rename
}
