import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestListComponent } from './rest-list/rest-list.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { RevListComponent } from './rev-list/rev-list.component';
import { NewRevComponent } from './new-rev/new-rev.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';

const routes: Routes = [
  {path: 'restaraunts', component: RestListComponent},
  {path: 'restaraunts/new', component: NewRestComponent},
  {path: 'restaraunts/:id', component: RevListComponent},
  {path:'restaraunts/:id/review', component: NewRevComponent},
  {path: 'restaraunts/:id/edit', component: EditRestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
