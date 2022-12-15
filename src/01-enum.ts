enum ROLES
{
    ADMIN      = "admin",
    SELLER      = "seller",
    CUSTOMER    = "customer"
};

/**
 * A `User` is an object with a `username` property of type `string` and a `role` property of type
 * `ROLES`.
 * @property {string} username - string;
 * @property {ROLES} role - ROLES.ADMIN
 */
type User = 
{
    username    : string;
    role        : ROLES; 
};

const AlfredoUser   : User = 
{
    username    : "Alfredo",
    role        : ROLES.ADMIN
};


console.log("🚀 ~ file: 01-enum.ts:21 ~ AlfredoUser", AlfredoUser);