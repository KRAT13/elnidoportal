import { Islands } from "./islands.model";

export interface Tours {
  code: string;
  name: string;
  islands?: Islands[];
}
