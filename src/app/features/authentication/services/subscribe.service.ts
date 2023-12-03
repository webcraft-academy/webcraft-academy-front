import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ninja } from '../models/ninja';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient) { }

  subscribe(ninja: Ninja){
    console.log(ninja)
    return this.http.post<Ninja>('https://localhost:7053/Ninja/register', ninja);
  }
}