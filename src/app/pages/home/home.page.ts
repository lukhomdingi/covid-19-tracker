import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { StateService } from '@services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  accessToken: string;
  private allCases: number;
  private confirmedCases: number;
  private suspectedCases: number;
  private deaths: number;
  private recoveredCases: number;
  private lastUpdate: Date;
  constructor(private apiService: ApiService, private stateService: StateService) {}
  ngOnInit() {
    this.accessToken = this.stateService.AccessToken;
    this.update();
  }

  get AllCases() {
    return this.allCases;
  }

  get ConfirmedCases() {
    return this.confirmedCases;
  }

  get SuspectedCases() {
    return this.suspectedCases;
  }

  get Deaths() {
    return this.deaths;
  }

  get RecoveredCases() {
    return this.recoveredCases;
  }

  get LastUpdate() {
    return this.lastUpdate;
  }

  async update() {
    await Promise.all([
    this.getAllCases(),
    this.getConfirmedCases(),
    this.getSuspectedCases(),
    this.getDeaths(),
    this.getRecoveredCases()]);
    this.lastUpdate = new Date();
  }

  async getAllCases() {
    this.allCases = await this.apiService.getAllCases(this.accessToken);
  }

  async getConfirmedCases() {
    this.confirmedCases = await this.apiService.getConfirmedCases(this.accessToken);
  }

  async getSuspectedCases() {
    this.suspectedCases = await this.apiService.getSuspectedCases(this.accessToken);
  }

  async getDeaths() {
    this.deaths = await this.apiService.getDeaths(this.accessToken);
  }

  async getRecoveredCases() {
    this.recoveredCases = await this.apiService.getRecovered(this.accessToken);
  }

}
