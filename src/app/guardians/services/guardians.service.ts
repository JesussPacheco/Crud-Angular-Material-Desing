import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import{Guardian }from "../Models/guardian"
import {Urgency} from "../../urgencies/models/urgency";
const baseUrl="http://localhost:3000/guardians"
@Injectable({
  providedIn: 'root'
})
export class GuardiansService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Guardian[]>{
    return this.http.get<Guardian[]>(baseUrl)
  }
  create(data:Guardian): Observable<Guardian>{
    return this.http.post<Guardian>(baseUrl, data);
  }
  delete(id:any): Observable<Guardian> {
    return this.http.delete<Guardian>(`${baseUrl}/${id}`);
  }
  update(id:number,data:Guardian): Observable<Guardian>{
    return this.http.put<Guardian>(`${baseUrl}/${id}`,data)
  }



}
