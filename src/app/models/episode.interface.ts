import { Character } from "./character.interface";

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: any;
  url:        string;
  created:    Date;
}
