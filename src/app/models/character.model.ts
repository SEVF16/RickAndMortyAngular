export class Character {
  id: number;
  name: string;
  status: string;
  img: string;
  created: string;

  constructor(pId: number, pName: string, pStatus: string, pImg: string, pCreated: string){
      this.id = pId;
      this.name = pName;
      this.status = pStatus;
      this.img = pImg;
      this.created = pCreated;
  }
}
