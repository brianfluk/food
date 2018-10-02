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
    return this.http.post<any>(this.url + "/surveyname", JSON.stringify({"a": "hi server. this is survey.service.ts"}))
    // .subscribe(res => {
    //   console.log(res);
    //   return res;
    // })
    // return this.http.post<any>(this.url + "/surveyname", "");


    // fetch(this.url + "/surveyname", {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({"a": "hi server. this is survey.service.ts"})
    // }).then(function(response) {
    //   response.json()
    //   .then((body) => {
    //     console.log("getSurveyName()",body);
    //     return body;
    //   })
    // })

  }

  /*===== for admin use in the backend interface =====*/
  addQuestion(surveyName, question) {
  }

}
