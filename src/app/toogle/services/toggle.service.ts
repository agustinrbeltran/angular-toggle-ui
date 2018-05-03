import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Toggle {
    type: string;
    constraints: {
      user:string[]
    };
    feature: string;
    description: string;
    enabled:boolean;
}

export class TogglesResponse{
    applicationName:string;
    applicationVersion:string;
    cluster:string;
    environment:string;
    toggles:Toggle[];
}

@Injectable()
export class ToggleService {
  
  constructor(private _http: HttpClient) {
  }

  getToggles(environment:string,cluster:string,application:string,version:string): Observable<any> {
        const headers = new HttpHeaders();
        const URL = '/dev/deployments/environments/'+ environment +'/clusters/'+ cluster +'/applications/'+ application +'/version/'+ version;
        headers.set('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','GET');

        return this._http.get(URL,{headers});
  }

  invalidateCache(): Observable<any> {
      return this._http.delete('/api/v1/parks');
  }


}