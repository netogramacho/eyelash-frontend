import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  constructor(private http: HttpClient) {}

  postBackend() {
    let id = 2;
    this.http.get(`http://127.0.0.1:8000/api/user/${2}`).subscribe();
  }
}
