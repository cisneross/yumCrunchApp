import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-rest',
  templateUrl: './edit-rest.component.html',
  styleUrls: ['./edit-rest.component.css']
})
export class EditRestComponent implements OnInit {

  constructor(private _httpService: HttpService,private _router:Router, private _activatedroute:ActivatedRoute) { }
id;
rest = {name: '',cuisine: ''};
errorMesgs =[];
  ngOnInit() {
    this.grabRest();
  }
  grabRest(){
    this._activatedroute.params.subscribe((params)=>{
      console.log('this is the id', params['id']);
      this.id = params['id'];
      var tempObservable = this._httpService.findTheRest(this.id);
      tempObservable.subscribe((data:any)=>{
        this.rest = data
        console.log('this is the product',data);
      });
    });
  }
  onSubmit(id){
    let observable = this._httpService.updateRest(this.rest, id);
    observable.subscribe((data: any) => {
      if (data.errors) {
        console.log(data.errors);
        // console.log(data.errors.name);
        this.errorMesgs.push(data.errors.name.message);
        this.errorMesgs.push(data.errors.cuisine.message);
      }
      else {
        console.log('edited', data);
        this.rest = {name: '',cuisine: ''};
        this._router.navigate(['/restaraunts']);
      }


    })
  }
  }



