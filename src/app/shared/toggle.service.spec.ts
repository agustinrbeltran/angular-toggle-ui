import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { ToggleService } from './toggle.service';
import { SharedModule } from '../shared/shared.module';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

const toggleMock = require('../../test-helpers/toggles.json');

class LocationMock {
    back() { }
}

describe('ToggleService', () => {
    const healthCheckUrl = '/dev/deployments/environments/latest/clusters/a/applications/sbc-wdw/version/0.1';
    let httpMock;
    let toggleService: ToggleService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                SharedModule
            ]
        });
        httpMock = TestBed.get(HttpTestingController);
        toggleService = TestBed.get(toggleService);

    }));
    describe('call getParks()', () => {
        it('should create', (done) => {
            toggleService.getToggles()
                .subscribe(
                    (res) => {
                        httpMock.verify();
                    },
                    (err) => {
                        console.error(err);
                    });
            done();
            const backReq = httpMock.expectOne(healthCheckUrl);
            backReq.flush('OK');
        });
    });
    
    describe('call invalidateCache()', () => {
        it('should invalidate cache', (done) => {
            toggleService.invalidateCache()
                .subscribe(
                    (res) => {
                        httpMock.verify();
                    },
                    (err) => {
                        console.error(err);
                    });
            done();
            const backReq = httpMock.expectOne(healthCheckUrl);
            backReq.flush('OK');
        });
    });
});
