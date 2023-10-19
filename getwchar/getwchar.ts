import { load } from "./load_library.ts";

function getwchar(): bigint | number | undefined {
    const { getwchar, library} = load();

    let result: bigint | number | undefined;
    try {
        result = getwchar();

    } finally {
        library.close();
    }
    return result;
}

export {
  getwchar
}
