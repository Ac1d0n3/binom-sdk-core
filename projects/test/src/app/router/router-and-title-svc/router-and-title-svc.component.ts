import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnRouterDataAndTitleService, BnRouterInfo } from '@binom/sdk-core/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-router-and-title-svc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-and-title-svc.component.html',
  styleUrl: './router-and-title-svc.component.scss'
})
export class RouterAndTitleSvcComponent implements OnInit,OnDestroy {

  subscriptions: Array<Subscription> = new Array<Subscription>();
  
  constructor(private routerSvc:BnRouterDataAndTitleService){

  }

  routerData:string = '';

  ngOnInit(): void {
    this.subscriptions.push( this.routerSvc.routerData$.subscribe( (data: any) => this.__onRouterChange(data) ) );
  }

  private __onRouterChange(data:any){

    this.routerData = JSON.stringify(data)
  }


  ngOnDestroy(): void {
    
  }
}
