import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import { Subscription, fromEvent  } from "rxjs";
import { NumberInput,BooleanInput,coerceBooleanProperty,coerceNumberProperty } from '@angular/cdk/coercion';

import { CommonModule } from '@angular/common';
import {BnSelectIconTriggerComponent} from '@binom/sdk-core/select-icon-trigger'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'bn-mini-search',
  standalone: true,
  imports: [CommonModule,BnSelectIconTriggerComponent, MatInputModule, MatFormFieldModule, FormsModule, TranslateModule],
  templateUrl: './bn-mini-search.component.html',
  styleUrl: './bn-mini-search.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BnMiniSearchComponent  implements OnInit, AfterViewInit, OnDestroy {
  @Input() color!:any;
  @Input() searchLabel: string = 'search';

  @Input() searchFields: any = [];
  @Input() currentSelected: any = [];

  @Input() translateTag: string = '';

  private  _debounceTime:number = 500;
  get debounceTime(): number{ return this._debounceTime; }
  @Input() set debounceTime(val: NumberInput) { this._debounceTime = coerceNumberProperty(val); }

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }


  @ViewChild('search', { static: true }) search!: ElementRef;

  @Input() searchText:string = '';
  show:boolean = true;
  sub!:Subscription;
  @Output() searchTextChange = new EventEmitter();
  @Output() searchFieldChange = new EventEmitter();
  @Output() searchShow = new EventEmitter();
  @Output() activeSearchFields = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  selectedValues(data:any){
    console.log(data)
    this.activeSearchFields.emit(data)
  }

  searchChange(){
    this.searchTextChange.emit(this.searchText)
  }

  ngAfterViewInit(){

   this.sub = fromEvent(this.search.nativeElement,'keyup')
      .pipe(
          debounceTime(this.debounceTime),
          distinctUntilChanged(),
          tap(() => {
              this.searchChange()
          })
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
