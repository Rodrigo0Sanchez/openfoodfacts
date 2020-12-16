import { Component } from '@angular/core';
import { FoodfactsService } from './foodfacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string;
  title = 'app';
  obsTrack: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public foodfact: FoodfactsService) {

  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.foodfact.searchFood(this.query);
    this.obsTrack.subscribe((data) => this.results = data);
  }
}
