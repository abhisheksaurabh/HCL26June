import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInStatus = false;
  constructor(private http:HttpClient){}
  
  login() {
   return this.http.get('userCredentials.json');    
   //return axios.get(`${BASE_URL}/staff`);
  }

  staffdata():Observable<any>{
    return this.http.get('staffdata.json');
  }
  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
