import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    rewind,
  } = library.symbols;

  return {
    rewind,
    library,
  };
}

export {
  load,
}
