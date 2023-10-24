import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    ungetc,
  } = library.symbols;

  return {
    ungetc,
    library,
  };
}

export {
  load,
}
