import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    rename,
  } = library.symbols;

  return {
    rename,
    library,
  };
}

export {
  load,
}
