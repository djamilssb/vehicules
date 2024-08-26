import { VehiculeTerrestre } from "./v_terrestre";
export abstract class Velo extends VehiculeTerrestre {
  pedaler(): void {
    console.log("Je pédale");
  }

  seDeplacer(): void {
    this.pedaler();
  }
}