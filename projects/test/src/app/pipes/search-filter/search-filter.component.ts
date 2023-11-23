import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSearchFilterPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, BnSearchFilterPipe, FormsModule,  MatFormFieldModule, MatInputModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
  inputValue: string = '';
  items: any[] = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Another Item' },
  ];
}
