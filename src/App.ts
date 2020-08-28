import { Param } from "./model/Param";
import { Factor } from "./model/Factor";
import { Rule } from "./model/Rule";
import { Decision } from "./model/Decision";
import { Scenario } from "./model/Scenario";

const param1 = new Param("param1", "hello");
const param2 = new Param("param2", "world");

const params = [param1, param2];

const factorCaculator = function (params: Param[]): Object {
    let result = "";
    params.forEach(param => {
        result = result + param.getValue();
    })
    console.log(result);
    return result;
}

const factor1 = new Factor("factor1", factorCaculator, params);

const factors = [factor1]

const ruleValidate = function (factorResults: Map<String, Object>) {
    const factorValue = factorResults.get("factor1");
    console.log("====factorValue====:" + JSON.stringify(factorValue));

    if (JSON.stringify(factorValue) === "\"helloworld\"") {
        const decision = new Decision("battle");
        return decision;
    }
}

const rule = new Rule(factors, ruleValidate);

const rules = [rule];

const scenario = new Scenario("scenario1", rules);

scenario.run();


