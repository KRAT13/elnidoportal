import { Documents } from "./documents.model";
import { Tours } from "./tours.model";

export interface Islands {
  code: string;
  name: string;
  activities?: string;
  description?: string;
  location?: {
    googleMapLink?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
  }
  tour?: Tours;
  images?: Documents;
}
