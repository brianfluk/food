import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private url = "";

  constructor(private http: HttpClient) { }

  /** not yet implemented in backend. Will return an Observable */
  getQuestions(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
