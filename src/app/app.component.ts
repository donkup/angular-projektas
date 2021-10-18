import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public vardas: string;
  public garbesTaskai: number;

  public constructor(){
    this.vardas = 'Gitanas';
  }
}
