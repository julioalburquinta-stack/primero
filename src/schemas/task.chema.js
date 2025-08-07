import {z} from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        requiered_error: "Title is requiered"
    }),
    description: z.string({
        requiered_error: "description must be a string"
    }),
    date: z.string().datetime().optional(),
})