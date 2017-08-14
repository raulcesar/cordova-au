import {bindable} from 'aurelia-framework';

export class TodoList {
  @bindable todos;
  @bindable removeCallback;
  @bindable updateCallback;


  valueChanged(newValue, oldValue) {

  }
}

