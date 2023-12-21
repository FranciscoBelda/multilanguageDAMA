import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateConfigService} from "../../services/translate-config.service";
import {ActionSheetService} from "../../services/action-sheet.service";
import {addIcons} from "ionicons";
import {languageOutline} from "ionicons/icons";

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, TranslateModule]
})
export class Tab3Page {
  language: any;
  constructor(private translateConfigService: TranslateConfigService,
              public actionSheetService: ActionSheetService) {
    this.translateConfigService.getDefaultLanguage();
    this.language = this.translateConfigService.getLanguage();
    addIcons({languageOutline})
  }

}
