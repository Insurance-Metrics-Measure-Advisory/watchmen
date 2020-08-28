import { Factor } from './Factor';
import { FactorCaculateContext } from './FactorCaculateContext'
import { Decision } from './Decision';

export class Rule {

    private factors: Factor[];

    private validate: Function;

    private decision: Decision;

    private factorResults: Map<String, Object>;

    constructor(factors: Factor[], validate: Function){
        this.factors=factors;
        this.validate=validate;
        this.factorResults = new Map<String, Object>();
    }

    run() {
        this.factors.forEach(factor => {
            const factorCaculateContext = new FactorCaculateContext(factor);
            const factorResult = factorCaculateContext.run();
            this.factorResults.set(factor.getName(), factorResult);
        })
        this.decision = this.validate(this.factorResults);
        return this.decision;
    }
}