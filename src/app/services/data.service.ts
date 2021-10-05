import { Injectable } from '@angular/core';
import {Guardian} from '../guardians/Models/guardian'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentGuardian:Guardian
  constructor() {
    this.currentGuardian={} as Guardian
  }
}
