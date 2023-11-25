import { Injectable } from '@angular/core';
import { BnParamFilter } from './bn-param-filter';
import { BehaviorSubject } from 'rxjs';
import { BnRouterDataAndTitleService } from '@binom/sdk-core/router';

@Injectable({
  providedIn: 'root'
})
export class BnParamFilterService {

  constructor(
    private routerData: BnRouterDataAndTitleService
  ) {

  }
  filters:BnParamFilter[] = [];
  disabled:boolean = false;

  private _filters= new BehaviorSubject<any>([]);
  public filters$ = this._filters.asObservable();

  private _clearState= new BehaviorSubject<string>('');
  public clearState$ = this._clearState.asObservable();

  addFilter(filter:BnParamFilter){
    //console.log(filter)
    if(this.filters.findIndex((obj:BnParamFilter) => obj.clear == filter.clear) === -1){
      this.filters.push(filter);
      this.update();
    }
  }

  clearAll(){
    this.routerData.setRouterParams(
      {},'', true
    )
    this.filters = []
    this.update()
  }

  clearFilter(filterClear:string){
    this.removeClearFilter(filterClear);
    this._clearState.next(filterClear)
  }

  toogleDisabled(value:boolean){
    this.disabled = value;
    this.update();
  }

  update(){
    this._filters.next({
      filters: this.filters,
      disabled: this.disabled
    })
  }

  removeClearFilter(filterClear:string){
    this.filters = this.filters.filter((obj:any) => obj.clear != filterClear);
    this.update();
  }
}


