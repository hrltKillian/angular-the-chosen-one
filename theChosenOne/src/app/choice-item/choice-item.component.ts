import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-choice-item',
  templateUrl: './choice-item.component.html',
  styleUrls: ['./choice-item.component.scss']
})
export class ChoiceItemComponent {
  @Input() name: string = '';
  @Input() isSelected: boolean = false;
  @Input() selectedChoiceIndex: number = -1;
  @Input() index: number = -1;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onSelect: EventEmitter<void> = new EventEmitter<void>();

  onDeleteClick() {
    this.onDelete.emit(this.name);
  }

  selectThisChoice() {
    this.onSelect.emit();
  }
}
