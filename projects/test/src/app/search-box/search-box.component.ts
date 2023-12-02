import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSearchBoxComponent } from '@binom/sdk-core/search-box';
import { BnParamFilterMenuComponent, BnParamFilterService } from '@binom/sdk-core/router-param-filter';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, BnSearchBoxComponent, BnParamFilterMenuComponent],
  providers:[BnParamFilterService],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  searchfields:any[] = [{name:'alias'},{name:'descr'}];
  currentSearchFields:string[] = ['alias','descr'];
  infoData:any = [
    {
      name:'A', end: '', start: 'A',
    },
    {
      name:'B', end: '', start: 'A',
    }
  ]
}
