import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fseek,
  } = library.symbols;

  return {
    fseek,
    library,
  };
}

export {
  load,
}
