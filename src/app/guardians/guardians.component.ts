import {Component, OnInit, ViewChild} from '@angular/core';
import {GuardiansService} from "./services/guardians.service";
import {Guardian} from "./Models/guardian";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.component.html',
  styleUrls: ['./guardians.component.css']
})

export class GuardiansComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'firstName','lastName','gender','address','actions'];
  dataSource = new MatTableDataSource<Guardian>();
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  constructor(private guardiansService:GuardiansService) {}
  ngOnInit(): void {
    this.retrieveGuardians();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   retrieveGuardians():void{
    this.guardiansService.getAll().
    subscribe(data=>{
      console.log(data);
      this.dataSource.data=data;
    },
     error => {console.log(error)} )
  }


}
