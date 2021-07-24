import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-events';
  selecionouInput(){
    alert("Selecionou Input")
  }
  retirouCursordoInput(){
    alert("Retirou o cursor do Input")
  }
  clicouNobotao(){
    alert("Clicou no ")
  }
}
