import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

  @Input() modalSubject:any;
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  closeAddModal(){
    this.event.emit()
  }
}
