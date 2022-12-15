
let AnyVar : any;
AnyVar = true;
AnyVar = undefined;
AnyVar = 1;
AnyVar = 1.0;
AnyVar = [];

AnyVar.toUpperCase();

let UnKnownVar : unknown;
UnKnownVar = true;
UnKnownVar = undefined;
UnKnownVar = 1;
UnKnownVar = 1.0;
UnKnownVar = [];

if(typeof UnKnownVar === 'string') UnKnownVar.toUpperCase();

const parse = (str: string) : unknown => {
    return JSON.parse(str);
}