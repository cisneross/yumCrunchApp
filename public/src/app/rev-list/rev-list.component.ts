import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rev-list',
  templateUrl: './rev-list.component.html',
  styleUrls: ['./rev-list.component.css']
})
export class RevListComponent implements OnInit {
foundRest =  {name: '', cuisine: '', reviews: []};
  constructor(private _httpService: HttpService,private _router:Router, private _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    // this.grabReviews();
    this.grabRest();
  }
  grabRest(){
    this._activatedroute.params.subscribe((params)=>{
      console.log('this is the id', params['id']);
      var id = params['id'];
      var tempObservable = this._httpService.findTheRest(id);
      tempObservable.subscribe((data:any)=>{
        this.foundRest = data;
        console.log(this.foundRest.reviews);
        console.log('this is the review',this.foundRest);
      });
    });
  }
  onNewRev(id){
    this._router.navigate([`/restaraunts/${id}/review`]);
  }
  // grabReviews(){
  //   let observable = this._httpService.findReviews();
  //   observable.subscribe((data:any)=>{
  //     console.log('made it back to the component.ts', data);
  //     this.prodList = data;
  //   })
  // }

}
