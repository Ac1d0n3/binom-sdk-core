import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ElementRef, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap,  map, take} from 'rxjs/operators';
import { Subscription, fromEvent  } from "rxjs";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BnSuffixInfoComponent} from '@binom/sdk-core/info';
import { BnSelectIconTriggerComponent} from '@binom/sdk-core/select-icon-trigger';
import { BooleanInput,NumberInput, coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { BnRouterDataAndTitleService } from '@binom/sdk-core/router';
import { BnParamFilterService } from '@binom/sdk-core/router-param-filter';

@Component({
  selector: 'bn-search-box',
  templateUrl: './bn-search-box.component.html',
  styleUrl: './bn-search-box.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports:[MatInputModule,MatButtonModule,MatTooltipModule,FormsModule, ReactiveFormsModule,TranslateModule,BnSuffixInfoComponent,BnSelectIconTriggerComponent]

})
export class BnSearchBoxComponent implements OnInit, AfterViewInit, OnDestroy {

  subscriptions: Array<Subscription> = new Array<Subscription>();

  @Input() infoData: any = [];
  @Input() searchFields: any =[];
  @Input() currentSelected: any = [];
  @Input() paramName:string = 'search';
  @Input() badgecolor:string = 'primary';
  @Input() searchLabel: string = 'search';
  @Input() clearFilterLabel = 'search';
  @Input() clearFilterIcon = 'fas fa-search fa-fw';
  @Input() translateTag: string = '';
  @Input() color:any = 'accent';

  private  _debounceTime:number = 500;
  get debounceTime(): number{ return this._debounceTime; }
  @Input() set debounceTime(val: NumberInput) { this._debounceTime = coerceNumberProperty(val); }

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  private  _setClearFilter:boolean = false;
  get setClearFilter(): boolean{ return this._setClearFilter; }
  @Input() set setClearFilter(val: BooleanInput) { this._setClearFilter = coerceBooleanProperty(val); }

  private  _showBadge:boolean = true;
  get showBadge(): boolean{ return this._showBadge; }
  @Input() set showBadge(val: BooleanInput) { this._showBadge = coerceBooleanProperty(val); }

  private  _disabled:boolean = false;
  get disabled(): boolean{ return this._disabled; }
  @Input() set disabled(val: BooleanInput) { this._disabled = coerceBooleanProperty(val); }

  private  _useParams:boolean = false;
  get useParams(): boolean{ return this._useParams; }
  @Input() set useParams(val: BooleanInput) { this._useParams = coerceBooleanProperty(val); }

  private  _setParams:boolean = false;
  get setParams(): boolean{ return this._setParams; }
  @Input() set setParams(val: BooleanInput) { this._setParams = coerceBooleanProperty(val); }

  private  _showInfo:boolean = false;
  get showInfo(): boolean{ return this._showInfo; }
  @Input() set showInfo(val: BooleanInput) { this._showInfo = coerceBooleanProperty(val); }


  @Output() searchTextValue = new EventEmitter();
  @Output() activeSearchFields = new EventEmitter();
  @Output() activeSearch = new EventEmitter();

  @ViewChild('search', {static: true}) search!: ElementRef;

  @Input() searchText:string = '';
  //currentSelected:any = [];

  constructor(
    private bnRouterData: BnRouterDataAndTitleService,
    private filterSvc: BnParamFilterService
  ) { }

  ngOnInit(): void {

    if(this.setClearFilter && this.setParams){
        let sub2$ = this.filterSvc.clearState$.subscribe((data:string) =>{
          if(data === this.paramName){
            this.searchText = ''
            this.searchChange()
          }
        })
        this.subscriptions.push(sub2$);
    }

    if(this.useParams){
      let sub3$ = this.bnRouterData.routerData$
      //.pipe(take(1))
      .subscribe( (routerData: any) => {

          this.searchText = routerData.routerParams[this.paramName]

        this.searchText != '' &&  this.searchText !== undefined ? this.__setClearFilter(): this._removeClearFilter();

          this.emitAll();

      }); this.subscriptions.push(sub3$);
    }


  }

  searchFieldsChange(data:any){
    this.currentSelected = data;
    this.activeSearchFields.emit(this.currentSelected);
    this.emitAll();
  }

  clearSearch(){
    this.searchText = ''
    console.log(this.searchText)
    this.emitAll();
    this.searchTextValue.emit(this.searchText)

  }

  private emitAll(){
    this.setSelectedParams();
    this.searchTextValue.emit(this.searchText)
    this.activeSearch.emit({searchText: this.searchText, currentSelected: this.currentSelected})
  }

  searchChange(){

    this.searchTextValue.emit(this.searchText)
    this.emitAll();
  }

  ngAfterViewInit(){

    fromEvent(this.search.nativeElement,'keyup')
      .pipe(
          debounceTime(this.debounceTime),
          distinctUntilChanged(),
          tap(() => {
              this.searchChange()
          })
      ).subscribe();
  }

  private __setClearFilter(){
    if(this.setClearFilter && this.setParams){

      setTimeout(() => {
        this.filterSvc.addFilter({
          label: this.clearFilterLabel, clear: this.paramName, icon: this.clearFilterIcon
        });
      });
    }
  }

  private _removeClearFilter(){
    if(this.setClearFilter && this.setParams){
      this.filterSvc.removeClearFilter( this.paramName )
    }
  }

  private setSelectedParams(clearFilter:boolean = true){

    if(this.setParams){
        this.bnRouterData.setRouterParams({
          [this.paramName]: this.searchText != '' && this.searchText !== undefined ? this.searchText : null,
          [this.paramName+'fields']: this.searchText != '' && this.searchText !== undefined && this.currentSelected.length !== this.searchFields.length ? this.currentSelected.toString() : null,
        },'', false)
    }
    if(clearFilter) this.searchText != '' && this.searchText !== undefined ? this.__setClearFilter(): this._removeClearFilter();
  }

  ngOnDestroy(): void { this.subscriptions.forEach(subscription => subscription.unsubscribe()); }

}
