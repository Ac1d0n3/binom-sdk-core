import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnMiniSearchComponent } from '@binom/sdk-core/mini-search';

@Component({
  selector: 'app-demo-mini-search',
  standalone: true,
  imports: [CommonModule,BnMiniSearchComponent],
  templateUrl: './demo-mini-search.component.html',
  styleUrl: './demo-mini-search.component.scss'
})
export class DemoMiniSearchComponent {

}
