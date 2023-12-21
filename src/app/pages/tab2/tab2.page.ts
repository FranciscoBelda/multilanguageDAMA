import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateConfigService} from "../../services/translate-config.service";
import {ActionSheetController} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {close, languageOutline} from "ionicons/icons";
import {TranslateModule} from "@ngx-translate/core";
import {ActionSheetService} from "../../services/action-sheet.service";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class Tab2Page {
  language: any;
  constructor(private translateConfigService: TranslateConfigService,
              public actionSheetService: ActionSheetService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getLanguage();
    addIcons({languageOutline})
  }

}
