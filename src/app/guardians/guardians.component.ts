import {Component, OnInit, ViewChild} from '@angular/core';
import {GuardiansService} from "./services/guardians.service";
import {Guardian} from "./Models/guardian";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
// @ts-ignore
import * as _ from 'lodash';
import {DataService} from "../services/data.service";
import {Urgency} from "../urgencies/models/urgency";
@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.component.html',
  styleUrls: ['./guardians.component.css']
})

export class GuardiansComponent implements OnInit {
  guardianCurrent:Guardian;
  displayedColumns: string[] = ['id', 'username', 'email', 'firstName','lastName','gender','address','actions'];
  dataSource: MatTableDataSource<Guardian>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('guardianForm', {static: false})
  studentForm!: NgForm;
  isEditMode = false;
  constructor(private guardiansService:GuardiansService ,public dataService:DataService) {
    this.dataSource = new MatTableDataSource<Guardian>();
    this.guardianCurrent={} as Guardian;
  }


  ngOnInit(): void {
    this.retrieveGuardians();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   retrieveGuardians():void{
    this.guardiansService.getAll().
    subscribe(data=>{
        console.log("entra pero no hace na:")
      console.log(data);
      this.dataSource.data=data;
    },
     error => {console.log(error)} )
  }
  refreshGuardians():void{
    this.retrieveGuardians();
  }
  deleteGuardian(guardian:Guardian):void{
    this.guardiansService.delete(guardian.id).subscribe( (data)=>{
      this.dataSource.data = this.dataSource.data.filter(u => u.id !== guardian.id);
    },(error)=>{
    } );
  }
  addGuardian():void{
  this.guardiansService.create(this.guardianCurrent)
    .subscribe((response)=>{
      this.dataSource.data.push(response)
    })
    this.refreshGuardians();
    this.cancelEdit();
  }
  editGuardian(element:Guardian){
    this.isEditMode=true;
    this.guardianCurrent=_.cloneDeep(element);
  }
  updateGuardian():void{
   this.guardiansService.update(this.guardianCurrent.id,this.guardianCurrent)
     .subscribe((response)=>{
       console.log(response)
     });
   this.cancelEdit()
  }
  cancelEdit():void{
    this.studentForm.resetForm();
    this.isEditMode=false;
  }
  sendGuardianToUrgencies(element:Guardian){
   this.dataService.currentGuardian=element;
  }

}
