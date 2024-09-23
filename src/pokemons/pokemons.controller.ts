import { Controller, Get, Param } from '@nestjs/common';
import { PokemonResponseOneHundred, PokemonsService } from './pokemons.service';
import { PokemonByIdResponse } from './interfaces/Pokemoninterface';

@Controller('api')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get('pokemon')
  async getAllPokemons(): Promise<PokemonResponseOneHundred[]> {
    return this.pokemonsService.getAllPokemons();
  }

  @Get('pokemon/:id')
  async getPokemonById(@Param('id') id: string): Promise<PokemonByIdResponse> {
    return this.pokemonsService.getPokemonById(Number(id));
  }

  @Get('pokemonAndTypes/:id/')
  async getPokemonByIdTypeDiffLenguage(@Param('id') id: string) {
    return this.pokemonsService.getPokemonByIdTypeDiffLenguage(Number(id));
  }
}
