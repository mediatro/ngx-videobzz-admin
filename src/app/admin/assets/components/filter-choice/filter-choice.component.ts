import {Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiEntity} from "../../../services/rest-api";

type Choice = ApiEntity;

@Component({
  selector: 'app-filter-choice',
  templateUrl: './filter-choice.component.html',
  styleUrls: ['./filter-choice.component.css']
})
export class FilterChoiceComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() label!: string;

  private _allItems: Choice[] = [];
  get allItems(): Choice[] {
    return this._allItems;
  }
  @Input() set allItems(value: Choice[]) {
    this._allItems = value;
    if(value.length >0){
      this.control.enable();
      this.control.setValue('');
    } else {
      //this.control.disable();
    }
    this.selectedItems = value.filter(i => this.selectionContains(i));
    this.handleChange();
  }
  @Output() onChange = new EventEmitter<Choice[]>();

  filteredItems$: Observable<Choice[]>;
  selectedItems: Choice[] = [];
  control = new FormControl(null);

  @ViewChild('inputEl') inputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor() {
    this.filteredItems$ = this.control.valueChanges.pipe(
      startWith(''),
      map((item: string | null) => item ? this.filter(item) : this._allItems.filter(i => !this.selectionContains(i))));
  }

  ngOnInit(): void {

  }

  private handleChange(){
    this.onChange.emit(this.selectedItems);
  }

  private selectionContains(item: Choice): boolean {
    return this.selectedItems.filter(si => si.id == item.id).length > 0;
  }

  private filter(value: string): Choice[] {
    const filterValue = value.toLowerCase();
    return this._allItems.filter(item => item.title.toLowerCase().indexOf(filterValue) === 0 && !this.selectionContains(item));
  }

  private getItem(key: string): Choice | null {
    let f = this.filter(key);
    return f.length > 0 ? f[0] : null;
  }

  add(value: string): void {
    let item = this.getItem(value);
    if(item) {
      this.selectedItems.push(item);
      this.handleChange();
    }
  }

  checkAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.add(value);
    }
    event.chipInput!.clear();
    this.control.setValue(null);
  }

  remove(item: Choice): void {
    const index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
      this.handleChange();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.add(event.option.value);
    this.inputEl.nativeElement.value = '';
    this.control.setValue(null);
  }

}
