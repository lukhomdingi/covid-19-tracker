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

  getAllCases(token: string): Promise<BigInteger> {
    return new Promise<BigInteger>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse>(url, {headers}).subscribe((response: CaseResponse) => {
        resolve(response.cases);
      }, (error) => reject(error));
    });
  }

  getConfirmedCases(token: string): Promise<BigInteger> {
    return new Promise<BigInteger>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse>(url, {headers}).subscribe((response: CaseResponse) => {
        resolve(response.data);
      }, (error) => reject(error));
    });
  }

  getSuspectedCases(token: string): Promise<BigInteger> {
    return new Promise<BigInteger>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse>(url, {headers}).subscribe((response: CaseResponse) => {
        resolve(response.data);
      }, (error) => reject(error));
    });
  }

  getDeaths(token: string): Promise<BigInteger> {
    return new Promise<BigInteger>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse>(url, {headers}).subscribe((response: CaseResponse) => {
        resolve(response.data);
      }, (error) => reject(error));
    });
  }

  getRecovered(token: string): Promise<BigInteger> {
    return new Promise<BigInteger>((resolve, reject) => {
      const url = Uri.ACCESS_TOKEN;
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${token}`);
      this.http.get<CaseResponse>(url, {headers}).subscribe((response: CaseResponse) => {
        resolve(response.data);
      }, (error) => reject(error));
    });
  }
}
