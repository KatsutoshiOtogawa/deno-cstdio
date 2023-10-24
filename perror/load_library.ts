import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    perror,
  } = library.symbols;

  return {
    perror,
    library,
  };
}

export {
  load,
}
