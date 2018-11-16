import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { NewRevComponent } from './new-rev/new-rev.component';
import { RevListComponent } from './rev-list/rev-list.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    RestListComponent,
    NewRestComponent,
    NewRevComponent,
    RevListComponent,
    EditRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
