import { load } from "./load_library.ts";

function remove(filename: Uint8Array): number {
    const { remove, library} = load();

    let result: number;
    try {
      result = remove(filename);
    } finally {
      library.close();
    }
    return result;
}

export {
  remove
}
