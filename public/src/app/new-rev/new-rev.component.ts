import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-new-rev',
  templateUrl: './new-rev.component.html',
  styleUrls: ['./new-rev.component.css']
})
export class NewRevComponent implements OnInit {
rest ={name: '', cuisine:'', reviews: '' }
id;
errorMesgs =[];
reviews =[];
newRev={name:'', stars:'', review:[]};
  constructor(private _httpService: HttpService,private _router:Router, private _activatedroute:ActivatedRoute) { }

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
    let observable = this._httpService.makeNewRev(this.newRev, id);
    observable.subscribe((data:any)=>{
      if (data.errors) {
        console.log(data.errors);
        // console.log(data.errors.name);
        this.errorMesgs.push(data.errors.name.message);
        this.errorMesgs.push(data.errors.stars.message);
        this.errorMesgs.push(data.errors.review.message);
      }
      else {
        console.log('Created', data);
        this.newRev = {name:'', stars:'', review:[]};
        this._router.navigate([`/restaraunts/${id}`]);
      }

    })
  }

}
