import { AddItemComponent } from './../second-page/add-item/add-item.component';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  toDoObjectList = [
    this.createTodoObject('cook food',1), 
    this.createTodoObject('wash dishes',2),
    this.createTodoObject('clean floor',3),
    this.createTodoObject('mop floor',4),
    this.createTodoObject('wash clothes',5),
    this.createTodoObject('iron clothes',6)
  ];
  itemName = '';

  constructor() { }

  ngOnInit() {
  }

  createTodoObject (item: string = '', id: number = Date.now(), flag: boolean = false){
    return {id, item, flag}
  }

  addObject(item: string){
    this.toDoObjectList.push(this.createTodoObject(item));
  }

  removeObject(idNumber: number){
    this.toDoObjectList = this.toDoObjectList.filter(object => object.id !== idNumber);
  }

  strikeItem(idNumber: number){
    this.toDoObjectList.filter(object => {
      if(object.id === idNumber){
        object.flag = true;
      }
    });
  }

  pullItemBack(idNumber: number){
    this.toDoObjectList.filter(object => {
      if(object.id === idNumber){
        object.flag = false;
      }
    });
  }

  receiveData(text: any){
    this.itemName = text.target.value;
  }

  updateObjectArray(array: []){
    this.toDoObjectList = array;
  }
}
