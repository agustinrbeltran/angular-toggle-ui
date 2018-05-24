import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Toggle } from '../models/toggle.model';
import { Utils } from '../../shared/utils/utils';
import { Deployment } from '../models/deployment.model';

@Injectable()
export class ToggleService {

  deployment: Deployment;
  response: any = {
    "applicationName": "sbc-wdw",
    "applicationVersion": "0.1",
    "cluster": "a",
    "environment": "latest",
    "toggles": [
      {
        "type": "blacklist",
        "constraints": {
          "user": [
            "CARDD054"
          ],
          "day": [
            "Monday",
            "Tuesday"
          ]
        },
        "feature": "FUTURE_PAYMENT",
        "description": "Toggle ON to implement rounding method in order to allow setting the payment as a Future Payment"
      },
      {
        "type": "on-off",
        "enabled": true,
        "feature": "MAIN_GUEST_DELETION",
        "description": "Toggle ON to allow main/first guess to be deleted for the first room"
      },
      {
        "type": "blacklist",
        "constraints": {
          "day": [
            "Monday"
          ]
        },
        "feature": "XSS_FILTER_FIX",
        "description": "Toggle ON to allow XSSFilter fix (coexistence with ACSFilter)"
      }
    ]
  };

  constructor(private _http: HttpClient) {
    this.deployment = new Deployment('latest', 'a', 'sbc-wdw', '0.1');
  }

  getToggles(): Observable<any> {
    const URL = this._getBaseUrl();
    return this._http.get(URL);
  }

  testToggle(featureToggle: string, constraints: Map<string, Array<string>>): Observable<any> {
    const URL = this._getBaseUrl() + '/toggles/' + featureToggle + '/status?' + this._getQueryString(constraints);
    return this._http.get(URL);
  }

  editToggle(newToggle: Toggle): Observable<any> {
    let payload: Object = this._getPayload(newToggle);
    const URL = this._getBaseUrl();
    return this._http.put(URL, payload);
  }


  // Utils

  public getToggleArray(res: any): Array<Toggle> {
    const result = new Array<Toggle>();

    res.toggles.forEach(toggle => {

      const tog = new Toggle(
        toggle.type,
        toggle.feature,
        toggle.description);

      if (toggle.type !== 'on-off') {
        tog.constraints = Utils.objToStrMap(toggle.constraints);
      } else {
        tog.enabled = toggle.enabled;
      }
      result.push(tog);
    });
    return result;
  }

  private _getPayload(newToggle: Toggle): Object {

    let payload: any = {
      toggles: Array()
    }

    let toggles: Toggle[];

    toggles = this.getToggleArray(this.response);
     
    //Find the old toggle
    let oldToggle: Toggle = this._findToggle(newToggle.feature, toggles);

    // Remove the old toggle from array
    toggles.splice(toggles.indexOf(oldToggle), 1);

    //Insert the new toggle in the array 
    toggles.push(newToggle);

    toggles.forEach(toggle => {
      payload.toggles.push(toggle.toObject());
    });

    return payload;
  }

  private _findToggle(feature: string, toggles: Toggle[]): Toggle {

    for (let toggle of toggles) {
      if (toggle.feature == feature)
        return toggle;
    }

  }

  private _getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('', '');
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

  private _getQueryString(constraints: Map<string, Array<string>>): string {
    let result = '';
    const keys = Utils.getKeys(constraints);

    keys.forEach(key => {
      const values: Array<string> = constraints.get((<string>key));
      for (let value of values) {
        result += key + '=' + value + '&';
      }
    });

    result = result.substring(0, result.length - 1);

    return result;
  }

}
