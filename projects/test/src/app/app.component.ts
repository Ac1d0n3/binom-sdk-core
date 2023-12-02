import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatToolbarModule, BnTranslateSwitchMenuComponent, TranslateModule, MatSidenavModule, MatButtonModule, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test';
  constructor(private translate:TranslateService){
    this.translate.addLangs(['en-US', 'de-DE']);
    this.translate.setDefaultLang( 'de-DE' );
    this.data.sort((a:any, b:any) => a.title.localeCompare(b.title));
    this.data.forEach((item:any) => {
      item.data.sort();
    });
  }

  data = [

    {
      title: 'pipes',
      data: ['debounce','highlight','safe-html','search-filter','set-default','sort-by','truncate','wordcount']
    },
    {
      title: 'ngx-translate-helper',
      data: ['translate-switch', 'date-and-numper-pipe', 'custom-mat-paginator-intl']
    },
    {
      title: 'icons',
      data: ['bn-icon']
    },
    {
      title: 'data-loader',
      data: ['api','json']
    },
    {
      title: 'utils',
      data: ['renderer','colors-utils-svc','html-svc']
    },
    {
      title: 'selection',
      data: ['selection-and-caret-svc']
    },
    {
      title: 'screen',
      data: ['fullscreen']
    },
    {
      title: 'logger',
      data: ['logger-svc']
    },
    {
      title: 'hover',
      data: ['hover-class']
    },
    {
      title: 'search',
      data: ['mini-search','search-box']
    },
    {
      title: 'interfaces',
      data: ['bn-el-size','bn-error','bn-key-value','bn-label-value']
    },

    {
      title: 'router',
      data: ['router-and-title-svc', 'router-reuse-svc']
    },
    {
      title: 'router-param-filter',
      data: ['router-param-filter-svc', 'router-param-filter-menu']
    },

    {
      title: 'help',
      data: ['help-svc', 'help-switch']
    },
    {
      title: 'assets-and-styles',
      data: ['core-scss', 'i18n']
    },

    {
      title: 'info',
      data: ['suffix-info', 'info-box', 'info-msg']
    },

    {
      title: 'select-icon-trigger',
      data: ['select-icon-trigger']
    },

    {
      title: 'value-accessor',
      data: ['content-editable']
    },

    {
      title: 'form-error',
      data: ['form-error']
    },

    {
      title: 'progress-content',
      data: ['progress-content']
    },
  ]

 
  
  
}
