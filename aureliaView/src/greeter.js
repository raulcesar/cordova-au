import { computedFrom } from 'aurelia-framework';

export class Greeter {
    constructor(firstName = 'fn', lastName = 'ln') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.i = 0;
        this.classes = '';
    }

    @computedFrom('firstName', 'lastName')
    get greeting() {
        return `Yo ${this.fullName}... what's up, ?`;
    }

    @computedFrom('firstName', 'lastName')
    get fullName() {
        console.log('did fullName');
        return `${this.firstName} ${this.lastName}`;
    }

    update() {
        this.firstName = `Raul ${this.i}`;
        this.i ++;
        this.classes = 'fuckbots';
    }
}
