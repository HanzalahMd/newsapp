import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { countryFormat } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  countries: countryFormat[] = []

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const url = "https://restcountries.eu/rest/v2/all";

    this.http.get<any>(url)
      .toPromise()
      .then(resp => {
        this.countries = resp.map(d => {
          return {
            name: d['name'],
            flag: d['flag'],
          } as countryFormat
        })
        console.info(this.countries)
      })
  }

}
