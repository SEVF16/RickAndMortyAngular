export class Character {
  id: number;
  name: string;
  status: string;
  image: string;
  created: string;
  species: string;

  constructor(pId: number, pName: string, pStatus: string, pImage: string, pCreated: string, pSpecies: string){
      this.id = pId;
      this.name = pName;
      this.status = pStatus;
      this.image = pImage;
      this.created = pCreated;
      this.species = pSpecies;
  }
}
