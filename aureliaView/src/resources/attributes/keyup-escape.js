import {inject} from 'aurelia-framework';

@inject(Element)
export class KeyupEscapeCustomAttribute {
    value;

    constructor(element) {
        this.element = element;

        this.escapePressed = e => {
            let key = e.which || e.keyCode;
            if (key === 27) {
                this.value();
            }
        };
    }

    attached() {
        this.element.addEventListener('keyup', this.escapePressed);
    }

    detached() {
        this.element.removeEventListener('keyup', this.escapePressed);
    }

    // valueChanged(newValue, oldValue) {

    // }

}

