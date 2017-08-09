class _Generator {
    constructor() {
        this.id = 0;
    }

    getNext() {
        this.id++;
        return this.id;
    }
}

export let generator = new _Generator();
