import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
restList =[];
  constructor(private _httpService: HttpService,private _router:Router, private _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.grabRests();
  }
  grabRests(){
    let observable = this._httpService.findRests();
    observable.subscribe((data:any)=>{
      console.log('made it back to the component.ts', data);
      this.restList = data;
    })
  }
  onUpdate(id ){
    this._router.navigate([`/restaraunts/${id}/edit`]);
  }
  onDelete(id){
    console.log(id);
    let observable  = this._httpService.sendRestToDelete(id);
    observable.subscribe((data: any) => {
      this.grabRests();
    });
  }

}
