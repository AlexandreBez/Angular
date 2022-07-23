import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds: number[] = [];
  evens: number[] = [];
  showNumber: any;

  // show the numbers on screen
  onStartedInterval(counterNumber: number){
    if(counterNumber % 2 === 0){
      this.evens.push(counterNumber);
    }else{
      this.odds.push(counterNumber);
    }

    this.showNumber = counterNumber;
  }

}
