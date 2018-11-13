import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SrsService {
  private url = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getSrsTable(): Observable<any> {
    return this.http.get<any>(this.url + "/srstable");
  }
}
