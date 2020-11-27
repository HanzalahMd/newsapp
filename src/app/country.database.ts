import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { countryFormat } from './models';

@Injectable()
export class CountryDatabase extends Dexie {

    private countryData: Dexie.Table<countryFormat, number>;

    constructor() {
        super('country')
        //create schema
        this.version(2).stores({
            countryData: '++id'
        })

        // this.countryData.add({name: "col", flag: "https://restcountries.eu/data/col.svg"});
        // this.countryData.add({name: "col", flag: "https://restcountries.eu/data/col.svg"});

        this.countryData = this.table('countryData');
        //this.countryData.mapToClass(countryFormat)
      }

      getCountries(): Promise<countryFormat[]> {
        return this.countryData.orderBy('name').toArray()
      }


}