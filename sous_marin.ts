import { VehiculeMarin } from "./v_marins";
export abstract class SousMarin extends VehiculeMarin {
  plonger(): void {
    console.log("Je plonge");
  }

  seDeplacer(): void {
    this.plonger();
  }
}