export interface PokemonModel {
    no: string;
    name: string;
    entries: Object;
  }
  
  export class Pokemon implements PokemonModel {
    no: string;
    name: string;
    entries: Object;
  
    constructor(
      no: string,
      name: string,
      entries: Object,
    ) {
      this.no = no;
      this.name = name;
      this.entries = entries;
    }
  }
  