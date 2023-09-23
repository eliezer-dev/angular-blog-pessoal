import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string =""
  cardTitle:string= ""
  cardDescription:string =""
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent()
  }
  setValuesToComponent(){
    const result = data.filter(article => article.standard == true)[0]

    this.cardTitle = result.title
    this.cardDescription = result.smallDescription
    this.photoCover = result.photoCover
    this.Id = result.id
  }
}
