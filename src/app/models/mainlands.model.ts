import { Documents } from "./documents.model";
import { Tours } from "./tours.model";

export interface Mainlands {
  code: string;
  name: string;
  activities?: string;
  description?: string;
  tour?: Tours;
  images?: Documents;
  location?: {
    googleMapLink?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
  }
}
