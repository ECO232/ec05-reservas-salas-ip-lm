const z = require('zod')

const roomSchema = z.object({
    name: z.string({
        invalid_type_error: 'Room name must be a String',
        required_error: 'Room name is required'
    }),
    building: z.string({
        invalid_type_error: 'Room building must be a String',
        required_error: 'Room building is required'
    }).default("Unknown"),
    reservation: z.array({
        invalid_type_error: 'Room reservation must be a Number',
        required_error: 'Room reservation is required'
    }),
})

function validateRoom(obj) {
    return roomSchema.safeParse(obj);
}

module.exports = {
    validateRoom
}