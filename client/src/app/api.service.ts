import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = '<Endpoint>';

  constructor(private http:HttpClient) {}

  speak(data) {
    return this.http.post(this.ENDPOINT, data);
  }
}