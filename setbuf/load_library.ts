import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    setbuf,
  } = library.symbols;

  return {
    setbuf,
    library,
  };
}

export {
  load,
}
