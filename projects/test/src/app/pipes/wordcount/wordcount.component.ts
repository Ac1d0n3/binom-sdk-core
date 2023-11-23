import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnWordcountPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-wordcount',
  standalone: true,
  imports: [CommonModule, BnWordcountPipe, FormsModule,  MatFormFieldModule, MatInputModule],
  templateUrl: './wordcount.component.html',
  styleUrl: './wordcount.component.scss'
})
export class WordcountComponent {
  inputValue: string = 'This is a sample text with multiple words.';
}
