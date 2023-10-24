import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    clearerr,
  } = library.symbols;

  return {
    clearerr,
    library,
  };
}

export {
  load,
}
