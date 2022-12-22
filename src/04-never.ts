const WithoutEnd = (): never => 
{
    while (true) 
    {
        console.log("🚀 ~ file: 04-never.ts:3 ~ WithoutEnd ~ true", true);
    }
};

function fail(Message: string) 
{
    throw new Error(Message);
};

const Example = (input: unknown) =>
{
    if(typeof input === 'string')
    {
        return 'Es un string';
    }
    else if (Array.isArray(input))
    {
        return 'Es un array';
    }
    
    fail('no match');
}


console.log("🚀 ~ file: 04-never.ts:29 ~ Example", Example('Hola'));
console.log("🚀 ~ file: 04-never.ts:30 ~ Example", Example([1, 2, 3]));
console.log("🚀 ~ file: 04-never.ts:31 ~ Example", Example('12333'));
console.log("🚀 ~ file: 04-never.ts:32 ~ Example", Example('Hola despues del fail.'));
console.log("🚀 ~ file: 04-never.ts:33 ~ Example", Example(12));