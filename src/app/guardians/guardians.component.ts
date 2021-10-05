import {Component, OnInit, ViewChild} from '@angular/core';
import {GuardiansService} from "./services/guardians.service";
import {Guardian} from "./Models/guardian";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.component.html',
  styleUrls: ['./guardians.component.css']
})

export class GuardiansComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'firstName','lastName','gender','address','actions'];
  dataSource: MatTableDataSource<Guardian>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private guardiansService:GuardiansService) {
    this.dataSource = new MatTableDataSource<Guardian>();
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


}
