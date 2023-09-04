const z = require('zod')

const userSchema = z.object({
    name: z.string({
        invalid_type_error: 'User name must be a String',
        required_error: 'User name is required'
    }),
    last: z.string({
        invalid_type_error: 'User last must be a String',
        required_error: 'User last is required'
    }).default("Unknown"),
})

function validateUser(obj) {
    return userSchema.safeParse(obj);
}

module.exports = {
    validateUser
}