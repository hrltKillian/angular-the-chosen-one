import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-choice-item',
  templateUrl: './choice-item.component.html',
  styleUrls: ['./choice-item.component.scss']
})
export class ChoiceItemComponent {
  @Input() name: string = '';
  @Input() chosenOne: number = -1;
  @Output() onDelete = new EventEmitter<string>();

  onDeleteClick(){
  this.onDelete.emit(this.name);
}

}
