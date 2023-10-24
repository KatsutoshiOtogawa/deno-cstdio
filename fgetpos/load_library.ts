import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fgetpos,
  } = library.symbols;

  return {
    fgetpos,
    library,
  };
}

export {
  load,
}
