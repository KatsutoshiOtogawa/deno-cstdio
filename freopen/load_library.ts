import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    freopen,
  } = library.symbols;

  return {
    freopen,
    library,
  };
}

export {
  load,
}
