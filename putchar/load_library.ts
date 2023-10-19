import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    putchar,
  } = library.symbols;

  return {
    putchar,
    library,
  };
}

export {
  load,
}
