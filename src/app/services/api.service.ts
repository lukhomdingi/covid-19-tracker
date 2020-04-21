import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { Api, Uri } from '@models/api.model';

@Injectable()
export class ApiService {
  constructor(private http: HTTP) { }

  getAccessToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = {Authorization: `Basic ${Api.KEY}`, Accept: 'application/json'};
      this.http.post(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any;
        resolve(data.access_token);
      }).catch((error) => reject(error));
    });
  }

  getAllCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.CASES;
      const headers = {Authorization: `Bearer ${token}`, Accept: 'application/json'};
      this.http.get(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any[];
        resolve(data.reduce((total, x) => total + x.cases, 0));
      }).catch((error) => reject(error));
    });
  }

  getConfirmedCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.CONFIRMED_CASES;
      const headers = {Authorization: `Bearer ${token}`, Accept: 'application/json'};
      this.http.get(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any[];
        resolve(data.reduce((total, x) => total + x.data, 0));
      }).catch((error) => reject(error));
    });
  }

  getSuspectedCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.SUSPECTED_CASES;
      const headers = {Authorization: `Bearer ${token}`, Accept: 'application/json'};
      this.http.get(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any[];
        resolve(data.reduce((total, x) => total + x.data, 0));
      }).catch((error) => reject(error));
    });
  }

  getDeaths(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.DEATHS;
      const headers = {Authorization: `Bearer ${token}`, Accept: 'application/json'};
      this.http.get(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any[];
        resolve(data.reduce((total, x) => total + x.data, 0));
      }).catch((error) => reject(error));
    });
  }

  getRecovered(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.RECOVERED;
      const headers = {Authorization: `Bearer ${token}`, Accept: 'application/json'};
      this.http.get(url, {}, headers).then((response: HTTPResponse) => {
        const data = JSON.parse(response.data) as any[];
        resolve(data.reduce((total, x) => total + x.data, 0));
      }).catch((error) => reject(error));
    });
  }
}
