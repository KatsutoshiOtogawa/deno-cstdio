import { load } from "./load_library.ts";

function puts(mes: Uint8Array): number | undefined {
    const { puts, library} = load();

    let result: number | undefined;
    try {
      result = puts(mes);
    } finally {
      library.close();
    }
    return result;
}

export {
  puts
}
