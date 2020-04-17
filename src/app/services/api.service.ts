import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api, Uri } from '@models/api.model';
import { AccessTokenResponse, CaseResponse } from '@models/response.model';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getAccessToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Basic ${Api.KEY}`);
      this.http.post<AccessTokenResponse>(url, {}, {headers}).subscribe((response: AccessTokenResponse) => {
        resolve(response.access_token);
      }, (error) => reject(error));
    });
  }

  getAllCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse[]>(url, {headers}).subscribe((response: CaseResponse[]) => {
        const cases: number = response.reduce((total, x) => total + x.cases, 0);
        resolve(cases);
      }, (error) => reject(error));
    });
  }

  getConfirmedCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse[]>(url, {headers}).subscribe((response: CaseResponse[]) => {
        const data: number = response.reduce((total, x) => total + x.data, 0);
        resolve(data);
      }, (error) => reject(error));
    });
  }

  getSuspectedCases(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse[]>(url, {headers}).subscribe((response: CaseResponse[]) => {
        const data: number = response.reduce((total, x) => total + x.data, 0);
        resolve(data);
      }, (error) => reject(error));
    });
  }

  getDeaths(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse[]>(url, {headers}).subscribe((response: CaseResponse[]) => {
        const data: number = response.reduce((total, x) => total + x.data, 0);
        resolve(data);
      }, (error) => reject(error));
    });
  }

  getRecovered(token: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse[]>(url, {headers}).subscribe((response: CaseResponse[]) => {
        const data: number = response.reduce((total, x) => total + x.data, 0);
        resolve(data);
      }, (error) => reject(error));
    });
  }
}
