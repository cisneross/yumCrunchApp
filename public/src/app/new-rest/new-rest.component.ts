import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-rest',
  templateUrl: './new-rest.component.html',
  styleUrls: ['./new-rest.component.css']
})
export class NewRestComponent implements OnInit {
  newRest = {name: '', cuisine: '', reviews: []};
errorMesgs =[];
  constructor(private _httpService: HttpService,private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let observable = this._httpService.makeNewRest(this.newRest);
    observable.subscribe((data:any)=>{
      if (data.errors) {
        console.log(data.errors);
        console.log(data.errors.name);
        this.errorMesgs.push(data.errors.name.message);
        this.errorMesgs.push(data.errors.cuisine.message);
      }
      else {
        console.log('Created', data);
        this.newRest = {name: '', cuisine: '', reviews: []};
        this._router.navigate(['/restaraunts']);
      }

    })
  }

}
