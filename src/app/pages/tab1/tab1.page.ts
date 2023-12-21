import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateConfigService} from "../../services/translate-config.service";
import {ActionSheetService} from "../../services/action-sheet.service";
import {TranslateModule} from "@ngx-translate/core";
import {addIcons} from "ionicons";
import {languageOutline} from "ionicons/icons";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class Tab1Page {
  language: any;
  constructor(private translateConfigService: TranslateConfigService,
              public actionSheetService: ActionSheetService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getLanguage();
    addIcons({languageOutline})
  }

}
