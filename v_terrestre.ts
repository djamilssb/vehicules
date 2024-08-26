import { Vehicule } from "./vehicules";
export abstract class VehiculeTerrestre extends Vehicule {
  protected nb_Roues: number;

  constructor(marque: string, modele: string, nb_Roues: number) {
    super(marque, modele);
    this.nb_Roues = nb_Roues;
  }
}