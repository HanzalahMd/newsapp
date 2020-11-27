import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ResultComponent } from './components/result/result.component';
import { ApiDatabase } from './api.database';

const ROUTES: Routes = [
  {path: '', component: MainComponent},
  //{path: 'top-headlines', component: MainComponent},
  {path: 'top-headlines/:country', component: ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), HttpClientModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [ApiDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
