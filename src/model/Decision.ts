

export class Decision {

    private action: String;

    constructor(action: String){
        this.action=action;
    }

    getAction(): String{
        return this.action;
    }

}