import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnHighlightPipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [CommonModule, BnHighlightPipe, FormsModule,  MatFormFieldModule, MatInputModule],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  inputText: string = 'This is a sample text for testing highlighting.';
  inputValue: string = '';
}
