import axios from "axios";

interface IEvolution{
  id: number;
  name: string;
  avatar: string;
  level: number;
}

export interface IPokemon{
  id: number;
  name: string;
  avatar: string;
  description: string;
  level: number;
  stats_battle: string[];
  color: string;
  uri: string;
  skills: {
    attack: number;
    resistance: number;
    mobility: number;
    punctuation: number;
    support: number
  }
  evolutions: IEvolution[]
}

export interface IPokemons{
  id: number;
  name: string;
  avatar: string;
  color: string;
  uri: string;
}

class PokemonService {
  private listPokemons: IPokemons[] = [];

  public async getPokemons(): Promise<IPokemons[]> {
    try {
      const response = await axios.get("https://6283929f92a6a5e462260498.mockapi.io/pokemons");
      this.listPokemons = response.data;    
      
      return this.listPokemons;
    } catch (error) {
      return [];
    }
  }

  public searchPokemon(search: string){
    const pokemonsFiltrados = this.listPokemons.filter((pokemon) => {
      return pokemon.name.toUpperCase().includes(search.toUpperCase());
    })

    return pokemonsFiltrados;
  }

  public async getPokemon(uri: string): Promise<IPokemon | undefined>{
    try {
      const response = await axios.get(`https://6283929f92a6a5e462260498.mockapi.io/pokemon/${uri}`);
      return response.data;  
    } catch (error) {
      return undefined;
    }
    
  }

}

const pokemonService = new PokemonService();
export default pokemonService;