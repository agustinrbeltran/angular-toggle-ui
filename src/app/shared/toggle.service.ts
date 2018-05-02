import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Toggle {
    type: string;
    constrain: {
      user:string[]
    };
    feature: string;
    description: string;
    enabled:boolean
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

  getToggles(): Observable<any> {
        const headers = new HttpHeaders();
        const URL = '/dev/deployments/environments/latest/clusters/a/applications/sbc-wdw/version/0.1';
        headers.set('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','GET');

        return this._http.get(URL,{headers});
  }

  invalidateCache(): Observable<any> {
      return this._http.delete('/api/v1/parks');
  }


}