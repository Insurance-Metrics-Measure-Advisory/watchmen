import { Factor } from "./Factor";



export class FactorCaculateContext{

    private factor: Factor;


    constructor(factor: Factor){
        this.factor=factor;
    }

    run(): Object {
        return this.factor.execute();
    }

}