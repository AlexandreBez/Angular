import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username = "";
  status = "";

  constructor() { }

  ngOnInit(): void {
  }

  printUsername(){
    this.status = "Username created";
    this.username = ""
  }

}
