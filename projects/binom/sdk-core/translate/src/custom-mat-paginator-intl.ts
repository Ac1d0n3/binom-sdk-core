
import {MatPaginatorIntl} from '@angular/material/paginator';
import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Subscription } from "rxjs";
import { OnDestroy } from '@angular/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl implements OnDestroy {
  constructor(private translate: TranslateService) {
    super();

    this.getAndInitTranslations();
  }
  pageLabel:string = '';
  ofLabel:string="";
  rows:string="";
  subscriptions: Array<Subscription> = new Array<Subscription>();

  getAndInitTranslations() {

      let sub1$ = this.translate.get("bnPaginator.itemsPerPage").subscribe((data:any)=>{
        this.itemsPerPageLabel = data
        this.changes.next();
      });
      let sub2$ = this.translate.get("bnPaginator.next").subscribe((data:any)=>{
        this.nextPageLabel = data
          this.changes.next();
      });
      let sub3$ = this.translate.get("bnPaginator.previous").subscribe((data:any)=>{
        this.previousPageLabel = data
        this.changes.next();
      });

      let sub4$ = this.translate.get("bnPaginator.pageLabel").subscribe((data:any)=>{
        this.pageLabel = data
        this.changes.next();
      });

      let sub5$ = this.translate.get("bnPaginator.ofLabel").subscribe((data:any)=>{
        this.ofLabel = data
        this.changes.next();
      });

      let sub6$ = this.translate.get("bnPaginator.rows").subscribe((data:any)=>{
        this.rows = data
        this.changes.next();
      });
      
      this.subscriptions.push(sub1$,sub2$,sub3$,sub4$,sub5$,sub6$)
  }

 override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    length = Math.max(length, 0);

    const amountPages = Math.ceil(length / pageSize)
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${this.rows} ${startIndex + 1} - ${endIndex} | ${this.pageLabel} ${page + 1} ${this.ofLabel} ${amountPages} `;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
