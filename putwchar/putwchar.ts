import { load } from "./load_library.ts";

function putwchar(a: number): bigint | number | undefined {
    const { putwchar, library} = load();

    let result: number | undefined | bigint;
    try {
        result = putwchar(a);

    } finally {
        library.close();
    }
    return result;
}

export {
  putwchar
}
