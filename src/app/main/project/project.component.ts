import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projects:any;
  @Output() openAdd = new EventEmitter();
  @Output() openDelete = new EventEmitter();
  constructor(private router: RouterModule) { }

  ngOnInit(): void {
  }

  test1(){
    console.log('test 1');
  }
  test2(){
    console.log('test 2');
  }

  openAddModal(){
    this.openAdd.emit()
  }
  openDeleteModal(){
    this.openDelete.emit()
  }
}
