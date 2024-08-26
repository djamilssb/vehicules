import { VehiculeMarin } from "./v_marins";
export abstract class Bateau extends VehiculeMarin {
  naviguer(): void {
    console.log("Je navigue");
    }
  
  seDeplacer(): void {
    this.naviguer();
    }
  }