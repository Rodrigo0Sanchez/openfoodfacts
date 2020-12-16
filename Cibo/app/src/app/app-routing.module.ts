import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { IdsearchComponent } from './idsearch/idsearch.component';

const routes: Routes = [
  { path: 'idsearch/:id', component: IdsearchComponent },
  { path: 'search', component: SearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
