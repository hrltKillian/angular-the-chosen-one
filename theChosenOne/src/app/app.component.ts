import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  choiceName: string = '';
  choices: string[] = ['test', 'test 2'];
  canChoose: boolean = true;
  canAdd: boolean = false;

  onChange(event : Event){
    const inputElement = event.target as HTMLInputElement;
    this.choiceName = inputElement.value;
    if (this.choiceName.length==0){
      this.canAdd = false;
    } else {
      this.canAdd = true;
    }
  }

  onAddChoiceClick(){
    this.choices.unshift(this.choiceName);
    if (this.choices.length > 1){
      this.canChoose = true;
    }
  }

  onChooseClick(){
    if (this.choices.length < 2){
      this.canChoose = false;
      console.log("non");
    } else {
      this.canChoose = true;
      console.log("oui");
    }
  }

  onDeleteChoice(name: string, index: number){
    this.choices.splice(index, 1);
    if (this.choices.length < 2){
      this.canChoose = false;
    } else {
      this.canChoose = true;
    }
  }
}
