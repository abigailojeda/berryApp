import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-home-project',
  templateUrl: './home-project.component.html',
  styleUrls: ['./home-project.component.scss']
})
export class HomeProjectComponent implements OnInit {

  @Input() projects:any;
  @Output() toogleModal = new EventEmitter<string>();
  constructor(private router: RouterModule) { }

  ngOnInit(): void {
  }

  //executes the EventEmitter with the method that shows or hides the modal
  toogleModalOutput(value:string){
    this.toogleModal.emit(value)
  }
}
