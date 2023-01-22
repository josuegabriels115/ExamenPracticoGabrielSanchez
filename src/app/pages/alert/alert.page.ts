import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['Cancel', 'Cancel'],
      inputs: [
        {
          placeholder: 'Nombres',
        },
        {
          placeholder: 'Apellidos',
          attributes: {
            maxlength: 8,
          },
        },
         {
          placeholder: 'Descripción materia',
          attributes: {
            maxlength: 8,
          },
        },
          {
            label: 'link',
            value:'https://ionicframework.com/'
        },
        {
          type:'datetime-local'
        },

        {
          type: 'password',
          placeholder: 'clave',
          min: 1,
          max: 100,
        },
         {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
          {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
