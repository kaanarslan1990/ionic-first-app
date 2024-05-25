import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }
  ngOnInit() {
    this.showLoading()
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass:'custom-loading',
      message: 'Loading...',
      duration: 2000,
    });
    loading.present();
  }
}
