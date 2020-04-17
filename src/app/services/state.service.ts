import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class StateService {
  private accessToken: string = null;
  constructor(private apiService: ApiService) { }

  async InitialiseState() {
    this.accessToken = await this.apiService.getAccessToken();
  }

  get AccessToken() {
    return this.accessToken;
  }
}
