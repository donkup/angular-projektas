import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public vardas: string;
  public garbesTaskai: number = 0;

  public constructor() {
    this.vardas = "Gitanas";
  }

  public pridetiTasku(): void {
    this.garbesTaskai++;
  }

  public atimtiTasku(): void {
    this.garbesTaskai--;
  }
}
