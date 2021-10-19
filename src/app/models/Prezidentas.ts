export class Prezidentas {
  public vardas: string;
  private _reitingas: number = 0;

  public constructor(vardas: string) {
    this.vardas = vardas;
  }

  public pridetiReitingo(): void {
    this._reitingas++;
  }

  public atimtiReitingo(): void {
    this._reitingas--;
  }

  public get reitingas(): number {
    return this._reitingas;
  }
}