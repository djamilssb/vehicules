import { VehiculeTerrestre } from "./v_terrestre";
export abstract class Voiture extends VehiculeTerrestre {
  conduire(): void {
    console.log("Je conduis");
  }

  seDeplacer(): void {
    this.conduire();
  }
}