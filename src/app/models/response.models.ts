import { Character } from "./character.interface";
import { Info } from "./info.interface";

export interface response {
  info: Info;
  results: Character[];
}
