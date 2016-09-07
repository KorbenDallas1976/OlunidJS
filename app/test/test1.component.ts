import { Component } from '@angular/core';

@Component({
  selector: 'olu-test1',
  templateUrl: 'app/test/test1.component.html',
  //directives: []
})

export class Test1Component {
  title = 'Event teszt';
  textData: string = 'Bubu\n';
  inputText: string = '';
  clickButton(){
    this.textData = this.textData + this.inputText + '\n';
    this.inputText = '';
  };
}
