
export class Param {

    private name: String;

    private description: String;

    private type: String;

    private value: Object;

    private meta: Object;

    constructor(name: String, value: Object) {
        this.name = name;
        this.value = value;
    }

    getValue(){
        return this.value;
    }

}