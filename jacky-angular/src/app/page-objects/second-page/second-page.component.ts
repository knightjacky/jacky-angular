import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  toDoList = ['cook food', 'wash dishes', 'clean floor', 'mop floor', 'wash clothes', 'iron clothes'];
  constructor() { }

  ngOnInit() {
  }

  

  retrieveData(item){
    this.toDoList = item;
  }

}
