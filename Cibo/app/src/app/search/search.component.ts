import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodfactsService } from '../foodfacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  query: string;
  title = 'first-routed-app';
  obsTrack: Observable<Object>;
  results: any;
  constructor(public foodfacts: FoodfactsService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.foodfacts.searchFood(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

}
