export class Location {
  id: number;
  name: string;
  dimension: string;
  residents: string;


  constructor(pId: number, pName: string, pDimension: string, pResidents: string){
      this.id = pId;
      this.name = pName;
      this.dimension = pDimension;
      this.residents = pResidents;

  }
}
