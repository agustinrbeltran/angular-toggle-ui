import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TogglesResponse } from '../domain/toggles-response';

@Injectable()
export class ToggleService {
  
  constructor(private _http: HttpClient) {
  }

  getToggles(environment:string,cluster:string,application:string,version:string): Observable<TogglesResponse> {
        const headers = new HttpHeaders();
        const URL = '/dev/deployments/environments/'+ environment +'/clusters/'+ cluster +'/applications/'+ application +'/version/'+ version;
        headers.set('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','GET');

        return this._http.get<TogglesResponse>(URL,{headers});
  }

  invalidateCache(): Observable<any> {
      return this._http.delete('/api/v1/parks');
  }


}