import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  constructor(private apiService: ApiService, public toastController: ToastController) {}
  async ngOnInit() {
    try {
      this.accessToken = await this.apiService.getAccessToken();
      await this.update();
    } catch (error) {
      console.error(error);
      this.presentToast('Something went wrong. Please try again later.');
    }
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

  async refresh(event: any) {
    try {
      await this.update();
    } catch (error) {
      console.log(error);
      this.presentToast('Something went wrong. Please try again later.');
    } finally {
      event.target.complete();
    }
  }

  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
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
