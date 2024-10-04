import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerService {
  private jsonURL = 'assets/bd/bd.json';
  private postsURL = 'assets/bd/posts.json';
  constructor(private http: HttpClient) { }

  getLentes(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  getPosts(): Observable<any>{
    return this.http.get(this.postsURL);
  }
  
}
