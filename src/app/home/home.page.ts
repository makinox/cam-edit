import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController) {}

  public async uploadImage() {
    const alert = await this.alertController.create({
      header: 'Hi',
      message: 'Want to upload an image?.',
      buttons: [
        {
          text: 'Camera',
          handler: async () => {
            try {
              const image = await Plugins.Camera.getPhoto({
                quality: 100,
                allowEditing: true,
                saveToGallery: false,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
              });
              console.log(image);
              // this.handleDataUrl(image.dataUrl);
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          text: 'Gallery',
          handler: async () => {
            try {
              const image = await Plugins.Camera.getPhoto({
                quality: 100,
                allowEditing: true,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Photos,
              });
              console.log(image);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ],
    });
    await alert.present();
  }
}
