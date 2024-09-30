import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private http: HttpClient
  ) { }

  async findAll() { 
    return this.http.get("http://localhost:3000/animal");
  }

}
