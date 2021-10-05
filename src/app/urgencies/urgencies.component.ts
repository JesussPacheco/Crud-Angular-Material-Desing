import { Component, OnInit } from '@angular/core';
import {Urgency} from "./models/urgency";
import {UrgenciesService} from "./services/urgencies.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-urgencies',
  templateUrl: './urgencies.component.html',
  styleUrls: ['./urgencies.component.css']
})
export class UrgenciesComponent implements OnInit {
   currentUrgencies:Urgency[];
  constructor(private urgenciesService:UrgenciesService ,public dataService:DataService) {
    this.currentUrgencies=[]
  }
  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials():void {
    this.urgenciesService.getByGuardianId(this.dataService.currentGuardian.id)
      .subscribe((data)=>{
       this.currentUrgencies=data;
      },
        error => {
        console.log(error);
        })
   }


}
