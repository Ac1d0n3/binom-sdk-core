import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnFullScreenDirective } from '@binom/sdk-core/screen';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-full-screen',
  standalone: true,
  imports: [CommonModule,BnFullScreenDirective,MatButtonModule, MatToolbarModule],
  templateUrl: './full-screen.component.html',
  styleUrl: './full-screen.component.scss'
})
export class FullScreenComponent {
  fs:boolean = false
}
