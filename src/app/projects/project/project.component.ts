import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public categories = ["ljfbsf", "hbsibcfsdsfnfewsofs", "bdsfobf", "ljfbsf", "hbsibcfsdsfnfewsofs", "bdsfobf", "ljfbsf", "hbsibcfsdsfnfewsofs", "bdsfobf"]

  constructor() { }

  ngOnInit(): void {
  }

}
