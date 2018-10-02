import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [ SurveyService ]
})
export class SurveyComponent implements OnInit {
  questions: any[];
  index = 0;
  surveyName: any;

  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.surveyService.getSurveyName().subscribe(
      res => {
        this.surveyName = res.name;
        // console.log(res);
      }
    );
  }

}
