import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Prezidentas} from "./models/prezidentas";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public prezidentas: Prezidentas;
  public klases: string[] = ["geras", "blogas", "didelis"];

  public klases2: Set<string> = new Set();

  public patarejai: string[] = [
    "Agnė Jakstienė",
    "Nerijus Kaučikas",
    "Tomas Lukoševičius",
    "Jaroslav Neverovič"
  ];

  public constructor() {
    this.prezidentas = new Prezidentas("Gitanas");
  }

  public istrintiPatareja(index: number): void {
    this.patarejai.splice(index, 1);
  }
}
