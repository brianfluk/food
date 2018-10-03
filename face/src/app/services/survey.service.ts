import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private url = "http://localhost:8000";

  constructor(private http: HttpClient) { 
  }

  /** not yet implemented in backend. Will return an Observable */
  getQuestions(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getSurveyName() {
    return this.http.post<any>(this.url + "/surveyname", {"a": "hi server. this is survey.service.ts"})
  }

  /*===== for admin use in the backend interface =====*/
  addQuestion(surveyName, question) {
  }

}
