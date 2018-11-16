import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  makeNewRest(rest){
    console.log('made it to the service')
    return this._http.post('/create', rest)
  }
  findRests(){
    return this._http.get('/allrests')
  }
  findTheRest(id){
    return this._http.get(`/findRest/${id}`)
  }
  makeNewRev(newRev, id){
    console.log('made it to the service for rev')
    return this._http.post(`/createrev/${id}`, newRev)
  }
  updateRest(rest, id){
    return this._http.put(`/edit/${id}`, rest);
  }
  sendRestToDelete(id){
    return this._http.delete(`/delete/${id}`)
  }
}

