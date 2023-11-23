import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnTruncatePipe } from '@binom/sdk-core/pipes';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-truncate',
  standalone: true,
  imports: [CommonModule, BnTruncatePipe, FormsModule,  MatFormFieldModule, MatInputModule],
  templateUrl: './truncate.component.html',
  styleUrl: './truncate.component.scss'
})
export class TruncateComponent {
  inputValue: string = 'This is a long piece of text that needs to be truncated to fit in a limited space.';

}
