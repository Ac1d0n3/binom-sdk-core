import { Component, OnInit, EventEmitter, Output, Input, HostBinding } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'bn-select-icon-trigger',
  templateUrl: './bn-select-icon-trigger.component.html',
  standalone:true,
  imports: [CommonModule, MatSelectModule, MatButtonModule, MatTooltipModule,TranslateModule, MatBadgeModule, FormsModule, ReactiveFormsModule,DragDropModule ]
})
export class BnSelectIconTriggerComponent implements OnInit {
  @HostBinding('class.button-component-fix') addClass: boolean = true;


  @Input() icon:string = 'fa-filter';
  @Input() iconType:string = 'fas';
  @Input() iconArt:string = '';
  @Input() iconSetClass:string = '';
  @Input() color:any = '';
  @Input() outlined:boolean = false;
  @Input() badgecolor:any = 'accent';
  @Input() badgesize:any = 'small';
  @Input() badgeHidden:boolean = false;
  @Input() translateTag:string = '';
  @Input() data:any;

  @Input() badgePosition:any = 'after';
  
  @Input() size:string = '';
  @Input() displayName= 'name';
  @Input() valueName= 'name';

  @Input() bnTooltip: string = '';

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  private  _alwaysOneSelected:boolean = false;
  get alwaysOneSelected(): boolean{ return this._alwaysOneSelected; }
  @Input() set alwaysOneSelected(val: BooleanInput) { this._alwaysOneSelected = coerceBooleanProperty(val); }

  private  _multiple:boolean = false;
  get multiple(): boolean{ return this._multiple; }
  @Input() set multiple(val: BooleanInput) { this._multiple = coerceBooleanProperty(val); }

  private  _showBadge:boolean = false;
  get showBadge(): boolean{ return this._showBadge; }
  @Input() set showBadge(val: BooleanInput) { this._showBadge = coerceBooleanProperty(val); }

  private  _sortable:boolean = false;
  get sortable(): boolean{ return this._sortable; }
  @Input() set sortable(val: BooleanInput) { this._sortable = coerceBooleanProperty(val); }

  private  _disabled:boolean = false;
  get disabled(): boolean{ return this._disabled; }
  @Input() set disabled(val: BooleanInput) { this._disabled = coerceBooleanProperty(val); }

  @Output() selectedValues = new EventEmitter();
  @Output() selectedOrder = new EventEmitter();

  @Input() currentSelected: any = [];

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    if(this.data === undefined){
      this.data = {
        values: []
      }
    }
  }

  onSelectChange(event:any){
    if(this.alwaysOneSelected && this.currentSelected.length == 0)
      this.currentSelected = [this.data[0].name]
    this.selectedValues.emit(this.currentSelected)
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    let cols:any = [];
    for(let col of this.data){
      if(this.currentSelected.includes(col[this.valueName]))
      cols.push(col[this.valueName])
    }

    this.selectedValues.emit(cols)
    this.selectedOrder.emit(this.data)
    //console.log(this.activeCols)
  }

}
