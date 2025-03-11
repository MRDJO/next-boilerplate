import {z} from 'zod'

export const loginValidator = z.object({
    username: z.string(),
    paassword: z.string()
})
export type LoginFormValues = z.infer<typeof loginValidator>