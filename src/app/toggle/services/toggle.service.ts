import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Toggle } from '../domain/toggle';
import { Utils } from '../../shared/utils/utils';
import { Deployment } from '../domain/deployment';

@Injectable()
export class ToggleService {

  public deployment: Deployment = new Deployment('latest', 'a', 'sbc-wdw', '0.1');

  constructor(private _http: HttpClient) { }

  getToggles(): Observable<any> {
    const headers = this._getHeaders();
    const URL = this._getBaseUrl();
    return this._http.get(URL, { headers });
  }

  testToggle(featureToggle: string, constraints: Map<string, string>): Observable<any> {
    const headers = this._getHeaders();
    const URL = this._getBaseUrl() + "/toggles/" + featureToggle + "/status?" + this._getQueryString(constraints);
    return this._http.get(URL, { headers });
  }


  //Utils

  public getToggleArray(res: any): Array<Toggle> {
    let result = new Array<Toggle>();

    res.toggles.forEach(toggle => {

      let tog = new Toggle(
        toggle.type,
        toggle.feature,
        toggle.description);

      if (toggle.type != "on-off") {
        tog.constraints = Utils.objToStrMap(toggle.constraints);
      } else {
        tog.enabled = toggle.enabled;
      }
      result.push(tog);
    });
    return result;
  }


  private _getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET');

    return headers;
  }

  private _getBaseUrl() {
    return '/dev/deployments/environments/' +
      this.deployment.environment +
      '/clusters/' +
      this.deployment.cluster +
      '/applications/' +
      this.deployment.application +
      '/version/' +
      this.deployment.version;
  }

  private _getQueryString(constraints: Map<string, string>): string {
    let result = "";
    let keys = Utils.getKeys(constraints);

    keys.forEach(key => {
      let value = constraints.get((<string>key));
      result += key + "=" + value + "&";
    });

    result = result.substring(0, result.length - 1);

    return result;
  }

}