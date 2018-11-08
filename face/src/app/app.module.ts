import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SrsComponent } from './components/srs/srs.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AiComponent } from './components/ai/ai.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SrsComponent,
    SanitizeHtmlPipe,
    NavigationComponent,
    AiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'review-system'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
