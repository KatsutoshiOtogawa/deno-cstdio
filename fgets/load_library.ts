import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fgets,
  } = library.symbols;

  return {
    fgets,
    library,
  };
}

export {
  load,
}
