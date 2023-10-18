import { _load } from './_load_library.ts';

function load() {

  const library = _load();

  const { 
    fclose,
  } = library.symbols;

  return {
    fclose,
    library,
  };
}

export {
  load,
}
