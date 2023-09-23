import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  projects:any[] = data.filter(project => project.standard === false)

  constructor() {

  }

  ngOnInit(): void {
    //this.projects = data.filter(project => project.standard === false)
    //console.log(this.projects)
}
}
