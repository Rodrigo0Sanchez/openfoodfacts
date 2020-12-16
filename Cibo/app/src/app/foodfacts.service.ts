import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class FoodfactsService {
  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=5&json=true`;
    let obsfood = this.http.get(url);
    console.log(obsfood);
    return obsfood;
  }

  getFood(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    console.log(this.http.get(url));
    return this.http.get(url);
  }

}
