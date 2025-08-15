import {z} from 'zod'

export const userValidator = z.object({})
export type UserFormValues = z.infer<typeof userValidator>

export const loginValidator = z.object({
    username: z.string(),
    password: z.string().min(5, 'Le mot de passe est requis')
})

export type LoginFormValues = z.infer<typeof loginValidator>