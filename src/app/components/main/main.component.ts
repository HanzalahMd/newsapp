import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { countryFormat } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryDatabase } from 'src/app/country.database'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  countries: countryFormat[] = []

  constructor(private router: Router, private http: HttpClient, private countryDB: CountryDatabase) { }

  // ngOnInit(): void {
  //   this.countryDB.getCountries()
  //     .then(resp => {
  //       this.countries = resp.map(d => {return  d })
  //         console.info(this.countries)
  //     })
  // }

  ngOnInit(): void {
    const url = "https://restcountries.eu/rest/v2/all";

    this.http.get<any>(url)
      .toPromise()
      .then(resp => {
        this.countries = resp.map(d => {
          return {
            code: d['alpha2Code'],
            name: d['name'],
            flag: d['flag'],
          } as countryFormat
        })
        console.info(this.countries)
      })
  }

  goSetting(){
    this.router.navigate(['settings'])
  }

}
