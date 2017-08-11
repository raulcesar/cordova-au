// import { inject } from 'aurelia-framework';


export class KeyupEnterCustomAttribute {
    static inject = [Element];
    element;
    value;
    enterPressed;

    constructor(element) {
        this.element = element;

        this.enterPressed = e => {
            let key = e.which || e.keyCode;
            if (key === 13) {
                this.value();
            }
        };
    }

    attached() {
        this.element.addEventListener('keyup', this.enterPressed);
    }

    detached() {
        this.element.removeEventListener('keyup', this.enterPressed);
    }

    valueChanged(newValue, oldValue) {

    }
}

