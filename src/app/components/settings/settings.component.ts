import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { apiFormat } from 'src/app/models';
import { ApiDatabase } from 'src/app/api.database'
import { Router } from '@angular/router'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private apiDB: ApiDatabase, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      apiKey: this.fb.control('', [ Validators.required ])
    })
  }

  deleteKey(){

  }

  async addKey(){
    const opt: apiFormat = {
      apiKey: this.form.get('apiKey').value
    }

    await this.apiDB.saveApi(opt)

    this.router.navigate(['top-headlines'])
  }

}
