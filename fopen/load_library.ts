import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fopen,
  } = library.symbols;

  return {
    fopen,
    library,
  };
}

export {
  load,
}
