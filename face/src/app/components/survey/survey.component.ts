import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [ SurveyService ]
})
export class SurveyComponent implements OnInit {
  questions: any[] = [{"question":""}]; // initialize to prevent console error
  index = 0;
  surveyName: any;
  questionBody: any = `<select class="custom-select">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>`;

  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit() { 
    this.getSurveyName();
    this.getQuestions();
  }

  getSurveyName() {
    this.surveyService.getSurveyName().subscribe(
      res => {
        this.surveyName = res.name;
        console.log("this.surveyName: ", this.surveyName)
      }
    )
  }

  getQuestions() {
    this.surveyService.getQuestions().subscribe(
      res => {
        this.questions = res;
      }
    )
  }

  nextQuestion(count) {
    if (this.index + count > (this.questions.length - 1) ) {
      this.index = (this.questions.length - 1);
      this.finishSurvey();
    } else if (this.index + count < 0) {
      this.index = 0;
    } else {
      this.index += count;
      console.log('this.questions.length', this.questions.length);
      console.log('this.index', this.index);
    }
  }

  finishSurvey() {
    console.log("survey completed")
  }

}
