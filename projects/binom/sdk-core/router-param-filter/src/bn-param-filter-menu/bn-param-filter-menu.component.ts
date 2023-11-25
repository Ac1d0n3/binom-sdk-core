import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge'
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BnParamFilters } from '../bn-param-filters';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { BnParamFilterService } from '../bn-param-filter.service';
@Component({
  selector: 'bn-param-filter-menu',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatButtonModule,MatBadgeModule,MatTooltipModule, TranslateModule],
  templateUrl: './bn-param-filter-menu.component.html',
  styleUrl: './bn-param-filter-menu.component.css',
})
export class BnParamFilterMenuComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  @Input() data!:BnParamFilters;
  @Input() translateTag: string = '';
  @Input() badgeColor:any = 'primary'
  private _enableToolTips:boolean = false;
  get enableToolTips():boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val:BooleanInput){ this._enableToolTips = coerceBooleanProperty(val); }

  private _disabled:boolean = false;
  get disabled():boolean{ return this._disabled; }
  @Input() set disabled(val:BooleanInput){ this._disabled = coerceBooleanProperty(val); }

  constructor(private filterService: BnParamFilterService, private cdr:ChangeDetectorRef) { }

  curFilters:any = [];
 
  @Output() onFilterEvent = new EventEmitter()

  ngOnInit(): void {
    this.sub = this.filterService.filters$.subscribe((data:any) => this.__handleUpdate(data));
  }

  private __handleUpdate(data:any){
    if(data.filters) this.curFilters = data.filters   
    this.disabled = data.disabled
    this.cdr.detectChanges()
  }

  clearFilter(filter:string){
    this.filterService.clearFilter(filter);
    this.onFilterEvent.emit({clear:filter, currentFilter: this.curFilters})
  }

  clearAll(){
    this.filterService.clearAll();
    this.onFilterEvent.emit({clear:'all', currentFilter: []})
  }
  ngOnDestroy() { this.sub.unsubscribe(); }
}

