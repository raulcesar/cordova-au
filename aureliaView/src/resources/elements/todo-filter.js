import { bindable, bindingMode } from 'aurelia-framework';

export class TodoFilter {
    @bindable({ defaultBindingMode: bindingMode.twoWay })
    filterString;

    limpaFiltro() {
        this.filterString = '';
    }

    // valueChanged(newValue, oldValue) {
    //     console.log(`from ${newValue} to ${oldValue}`);
    // }
}

