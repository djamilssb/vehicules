export abstract class Vehicule {
  protected marque: string;
  protected modele: string;

  constructor(marque: string, modele: string) {
    this.marque = marque;
    this.modele = modele;
  }

  abstract seDeplacer(): void;
}