import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  Id:string="0"

  photoCover:string =""
  cardTitle:string= ""
  cardDescription:string =""

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }
  setValuesToComponent(Id:string){
    const result = data.filter(article => article.id == Id)[0]

    this.cardTitle = result.title
    this.cardDescription = result.smallDescription
    this.photoCover = result.photoCover
    this.Id = result.id
  }

}
