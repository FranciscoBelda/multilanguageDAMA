import { Injectable } from '@angular/core';
import {ActionSheetController} from "@ionic/angular/standalone";
import {TranslateConfigService} from "./translate-config.service";
import {addIcons} from "ionicons";
import {languageOutline,close} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class ActionSheetService {
  language: any;
  constructor(private translateConfigService: TranslateConfigService,
              private actionSheetCtrl: ActionSheetController) {
    addIcons({languageOutline, close})
  }
  async changeLanguage() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Language',
      buttons: [
        {
          text: 'English',
          icon: 'language-outline',
          handler: () => {
            this.language = 'en';
            this.translateConfigService.setLanguage('en');
          }
        },
        {
          text: 'Spanish',
          icon: 'language-outline',
          handler: () => {
            this.language = 'es';
            this.translateConfigService.setLanguage('es');
          }
        },
        {
          text: 'Arabian',
          icon: 'language-outline',
          handler: () => {
            this.language = 'ar';
            this.translateConfigService.setLanguage('ar');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Closing...');
          }
        },
      ]
    });
    await actionSheet.present();
  }
}
