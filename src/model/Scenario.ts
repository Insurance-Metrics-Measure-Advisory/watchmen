
import { Rule } from './Rule';
import { Decision } from './Decision';

export class Scenario {

    private id: String;

    private rules: Rule[];

    private decisions: Decision[];

    constructor(id: String, rules: Rule[]) {
        this.id = id;
        this.rules = rules;
        this.decisions=[];
    }

    run() {
        this.rules.forEach(rule => {
            this.decisions.push(rule.run());
        })
        this.decisions.forEach(decision => {
            console.log(decision.getAction());
        })
    }


}