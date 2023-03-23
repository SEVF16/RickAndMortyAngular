export class episode {
  id: number;
  name: string;
  episode: string;
  //characters: any[];


  constructor(pId: number, pName: string, pEpisode: string, pCharacters: any[]){
      this.id = pId;
      this.name = pName;
      this.episode = pEpisode;
      //this.characters = pCharacters;

  }
}
