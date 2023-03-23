import { Location } from '../models/location.model';


export class Character {
  id: number;
  name: string;
  status: string;
  image: string;
  created: string;
  species: string;
  location: Location;
  episode: string;
  constructor(pId: number, pName: string, pStatus: string, pImage: string, pCreated: string, pSpecies: string, pLocation : Location, pEpisode: string){
      this.id = pId;
      this.name = pName;
      this.status = pStatus;
      this.image = pImage;
      this.created = pCreated;
      this.species = pSpecies;
      this.location = pLocation;
      this.episode = pEpisode;
  }
}
