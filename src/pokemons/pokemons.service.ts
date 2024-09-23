import { Injectable } from '@nestjs/common';
import { PokemonByIdResponse } from './interfaces/Pokemoninterface';

export interface PokemonResponseOneHundred {
  name: string;
  url: string;
}

export interface PokemonsResponseOneHundred {
  results: PokemonResponseOneHundred[];
}

@Injectable()
export class PokemonsService {
  async getAllPokemons(): Promise<PokemonResponseOneHundred[]> {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch pokemons');
    }

    const data: PokemonsResponseOneHundred = await response.json();
    return data.results;
  }

  async getPokemonById(id: number): Promise<PokemonByIdResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch pokemon');
    }

    const data = await response.json();

    const result = {
      name: data.forms[0].name,
      types: data.types,
    };

    return result;
  }

  async getPokemonByIdTypeDiffLenguage(id: number) {
    let payload = {
      name: '',
      types: [],
    };

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch pokemon');
    }

    const data = await response.json();

    const names = [];

    const searchTypes = data.types.map(async (type) => {
      const url = type.type.url;
      const response = await fetch(url);
      const dataNames = await response.json();
      const typeNames = dataNames.names
        .filter((name) => {
          return name.language.name === 'es' || name.language.name === 'ja';
        })
        .map((name) => name);
      names.push(...[typeNames]);
    });

    await Promise.all(searchTypes);

    payload = {
      name: data.forms[0].name,
      types: data.types.map((type, index) => ({
        type: {
          name: type.type.name,
          url: type.type.url,
          names: names[index],
        },
      })),
    };

    return payload;
  }
}
