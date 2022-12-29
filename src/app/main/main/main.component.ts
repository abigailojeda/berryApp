import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public projects = ["hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf", "hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf","oldshnfphnf","hpig", "lhesoifes", "oldshnfphnf"]

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
