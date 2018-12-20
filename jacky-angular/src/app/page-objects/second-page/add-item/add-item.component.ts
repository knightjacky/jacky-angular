import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() workList : string[];
  @Output () clickChildEvent = new EventEmitter();
  dataContainer : string;
  constructor() { }

  ngOnInit() {
  }

  saveData(data : any) {
    this.dataContainer = data.target.value;
  }

  addItem(item: string){
    this.workList.push(item);
    this.clickChildEvent.emit(this.workList);
  }

}
