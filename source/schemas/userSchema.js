export const createUser = {
    type: 'object',
    properties: {
        name: {
            type:      'string',
            minLength: 3,
        },
        email: {
            type:   'string',
            format: 'email',
        }
    },
    required: ['name', 'email'],
    additionalProperties: false
}


// User{
//     name*	string
//     email*	string
//     phone*	string
//     password*	string
//     sex*	string
//     Enum:
//         Array [ 2 ]
//     role	string
//     Enum:
//         Array [ 3 ]
// }