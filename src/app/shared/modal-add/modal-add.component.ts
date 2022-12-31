import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent {

  @Input() modalSubject:any;
  @Output() toogleModal = new EventEmitter<string>();

  constructor() { }
  
  //executes the EventEmitter with the method that shows or hides the modal
  toogleModalOutput(value:string){
    this.toogleModal.emit(value)
  }
}
