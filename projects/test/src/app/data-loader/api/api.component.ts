import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnApiService } from '@binom/sdk-core/data-loader';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  providers:[ BnApiService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  apiurl:string;
  constructor(private apiSvc:BnApiService){
    this.apiurl = this.apiSvc.getApiUrl()
  }
  
}
