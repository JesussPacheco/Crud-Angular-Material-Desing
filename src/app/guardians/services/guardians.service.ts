import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import{Guardian }from "../Models/guardian"
const baseUrl="http://localhost:3000/Guardians"
@Injectable({
  providedIn: 'root'
})
export class GuardiansService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Guardian[]>{
    return this.http.get<Guardian[]>(baseUrl)
  }

}
