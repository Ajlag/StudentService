export class Ocene {
  nazivPredmeta: string;
  datum: string;
  ocena: number;
  opisOcene: string;
  idOcene: number;
  indeks: string;

  constructor(nazivPredmeta: string, datum: string, ocena: number, opisOcene: string, idOcene: number, indeks: string) {
    this.nazivPredmeta = nazivPredmeta;
    this.datum = datum;
    this.ocena = ocena;
    this.opisOcene = opisOcene;
    this.idOcene = idOcene;
    this.indeks = indeks;
  }
}
