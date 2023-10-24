import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    remove,
  } = library.symbols;

  return {
    remove,
    library,
  };
}

export {
  load,
}
