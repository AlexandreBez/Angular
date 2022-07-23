import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // used to emit the value of the counter
  @Output() startedInterval = new EventEmitter<number>();
  
  // auxiliar variables
  interval: any;
  counterAux = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }

  // start the interval after 1000 sec
  onStartGame(){
    this.interval = setInterval(() => {
      this.startedInterval.emit(this.counterAux + 1);
      this.counterAux++;
    }, 1000);
  }

  // pause the interval
  onPauseGame(){
    clearInterval(this.interval);
  }
}
