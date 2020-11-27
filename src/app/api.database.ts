import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { apiFormat } from './models';

@Injectable()
export class ApiDatabase extends Dexie {

    private apiData: Dexie.Table<apiFormat, number>;

    constructor() {
        super('apikeys')
        //create schema
        this.version(1).stores({
          apiData: '++apiKey',
        })

        this.apiData = this.table('apiData');
      }

    async saveApi(s: apiFormat): Promise<any>{
        const resultCount = await this.apiData.count()

    if (resultCount <= 0)
      return this.apiData.add(s)
    }

}