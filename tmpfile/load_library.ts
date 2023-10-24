import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    tmpfile,
  } = library.symbols;

  return {
    tmpfile,
    library,
  };
}

export {
  load,
}
