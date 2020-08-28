
import { Param } from './Param'


export class Factor {

    private name: String;

    private description: string;

    private type: string;

    private params: Param[];

    private caculator: Function;

    private meta: Object;

    private result: Object;


    constructor(name: string, caculator: Function, params: Param[]) {
        this.name = name;
        this.caculator = caculator;
        this.params = params;
    }

    execute() {
        return this.caculator(this.params);
    }

    getName() {
        return this.name;
    }
}