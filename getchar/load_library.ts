import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    getchar,
  } = library.symbols;

  return {
    getchar,
    library,
  };
}

export {
  load,
}
