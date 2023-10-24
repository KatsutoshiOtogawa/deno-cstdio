import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    ferror,
  } = library.symbols;

  return {
    ferror,
    library,
  };
}

export {
  load,
}
