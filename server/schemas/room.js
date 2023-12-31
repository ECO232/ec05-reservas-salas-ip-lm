const z = require('zod')

const roomSchema = z.object({
    name: z.string({
        invalid_type_error: 'Room name must be a String',
        required_error: 'Room name is required'
    }),
    location: z.string({
        invalid_type_error: 'Room location must be a String',
        required_error: 'Room location is required'
    }).default("Unknown"),
    schedule: z.array({
        invalid_type_error: 'Room schedule must be a Number',
        required_error: 'Room schedule is required'
    }),
})

function validateRoom(obj) {
    return roomSchema.safeParse(obj);
}

module.exports = {
    validateRoom
}