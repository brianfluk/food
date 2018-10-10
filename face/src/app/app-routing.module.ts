import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { SurveyComponent } from './components/survey/survey.component';
import { HomeComponent } from './components/home/home.component';
import { SrsComponent } from './components/srs/srs.component';

const routes: Routes = [
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'srs', component: SrsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
