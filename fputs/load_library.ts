import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fputs,
  } = library.symbols;

  return {
    fputs,
    library,
  };
}

export {
  load,
}
