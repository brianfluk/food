import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'survey', component: SurveyComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
