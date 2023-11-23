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
      data: ['translate-switch','date-and-numper-pipe']
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
      data: ['selection-and-caret-svc', 'copy-to-clipboard-svc']
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
      title: 'interfaces',
      data: ['']
    },
  ]

 
  
  
}
