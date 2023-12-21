import {Component, EnvironmentInjector, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {addIcons} from "ionicons";
import {ellipse, square, triangle} from "ionicons/icons";
import {TranslateConfigService} from "../../services/translate-config.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class TabsPage {
  language: any;
  constructor(private translateConfigService: TranslateConfigService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getLanguage();
    addIcons({triangle,square,ellipse});
  }


}
