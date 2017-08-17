import { bindable, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class TodoPopupItem {
    @bindable todo;
    @bindable removeCallback;
    @bindable updateCallback;
    @bindable cancelEditCallback;

    constructor(router) {
        this.router = router;
    }

    todoChanged(newValue, oldValue) {
        console.log(newValue);
    }

}

