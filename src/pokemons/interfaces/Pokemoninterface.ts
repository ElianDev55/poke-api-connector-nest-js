export interface PokemonResponseOneHundred {
  name: string;
  url: string;
}
export interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonsResponseOneHundred {
  results: PokemonResponseOneHundred[];
}

export interface PokemonByIdResponse {
  name: string;
  types: Types[];
}
