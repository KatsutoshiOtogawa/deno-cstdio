import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fgetc,
  } = library.symbols;

  return {
    fgetc,
    library,
  };
}

export {
  load,
}
