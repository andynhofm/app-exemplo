import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  helloHabilitado = false;

  constructor(private alertController: AlertController) {
  }

  async eventoHello() {
    const alert = await this.alertController.create({
      buttons: ['Ok'],
      message: 'Hello world!'
    });

    return await alert.present();
  }
}
