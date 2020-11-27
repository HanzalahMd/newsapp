import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newsFormat } from 'src/app/models';
import { ApiDatabase } from 'src/app/api.database'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  country = ''
  apiKey= ''
  newsResult: newsFormat[] = []

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private apiDB:ApiDatabase) { }

  ngOnInit(): void {

    this.country = this.activatedRoute.snapshot.params['alpha2Code']
    this.apiDB.getApi().then(res => {
      this.apiKey = res.apiKey
    })

    const url = `https://newsapi.org/v2/top-headlines?${this.country}&${this.apiKey}`
    //let params = (new HttpParams()).set('country', this.country)

    this.http.get<any>(url)
      .toPromise()
      .then(resp => {
        const results = resp.articles as any[]
        this.newsResult = results.map(d => {
          return {
            source: d['source']['name'],
            author: d['author'],
            title: d['title'],
            description: d['description'],
            url: d['url'],
            image: d['urlToImage'],
            publish: d['publishedAt'],
            content: d['content'],
          } as newsFormat
        })
        console.info('>>> searchResults: ', this.newsResult)
      })

  }

}
