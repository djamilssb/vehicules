import { Vehicule } from "./vehicules";
export abstract class VehiculeMarin extends Vehicule {
  protected flottabilite: number;
  
  constructor(marque: string, modele: string, flottabilite: number) {
    super(marque, modele);
    this.flottabilite = flottabilite;
  }
}