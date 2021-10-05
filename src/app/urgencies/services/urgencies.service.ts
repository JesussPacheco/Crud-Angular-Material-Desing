import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Urgency} from "../models/urgency";

const baseUrl="http://localhost:3000/Urgency"
@Injectable({
  providedIn: 'root'
})
export class UrgenciesService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Urgency[]>{
    return this.http.get<Urgency[]>(baseUrl)
  }
  create(data:Urgency): Observable<Urgency>{
    return this.http.post<Urgency>(baseUrl, data);
  }
  delete(id:any): Observable<Urgency> {
    return this.http.delete<Urgency>(`${baseUrl}/${id}`);
  }
  update(id:number,data:Urgency): Observable<Urgency>{
    return this.http.put<Urgency>(`${baseUrl}/${id}`,data)
  }
  getByGuardianId(id: number): Observable<Urgency[]> {
    return this.http.get<Urgency[]>(`http://localhost:3000/guardians/${id}/urgencies`);
  }
}
