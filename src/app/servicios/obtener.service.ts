import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerService {
  private jsonURL = 'assets/bd/bd.json';
  constructor(private http: HttpClient) { }

  getLentes(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
  
}
