import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projects:any;

  constructor() { }

  ngOnInit(): void {
  }

  test1(){
    console.log('test 1');
  }
  test2(){
    console.log('test 2');
  }
}
