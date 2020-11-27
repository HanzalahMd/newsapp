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
import { CountryDatabase } from './country.database';

const ROUTES: Routes = [
  {path: '', component: SettingsComponent},
  {path: 'main', component: MainComponent},
  {path: 'news/:country', component: ResultComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
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
  providers: [ApiDatabase, CountryDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
