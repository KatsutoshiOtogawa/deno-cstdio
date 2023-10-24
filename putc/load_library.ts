import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    putc,
  } = library.symbols;

  return {
    putc,
    library,
  };
}

export {
  load,
}
