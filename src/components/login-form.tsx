"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "@bprogress/next/app"
import { useForm } from "react-hook-form"
import { LoginFormValues, loginValidator } from "@/features/user/user.validators"
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form"
import FormInputField from "./form/form-input-field"
import FormInputPasswordField from "./form/form-input-password-field"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginValidator),
    defaultValues:{
      username:"",
      paassword:""
    }
  })

  const onSubmit = (values: LoginFormValues) => {

  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="my-8 flex flex-row justify-center items-center text-center" >
        <Image src="/straca.png"  height={300} width={300} alt="Straca" />
        </div>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form  {...form}>
          <form className="p-6 md:p-8 py-14">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Bon Retour!</h1>
                <p className="text-muted-foreground text-balance">
                  Renseignez vos identifiants pour accéder à votre compte
                </p>
              </div>
              <div className="grid gap-3">
                <FormInputField name="username" control={form.control} label="Nom d'utilisateur"   />
              </div>
              <div className="grid gap-3">
                <FormInputPasswordField name="password" control={form.control} label="Mot de passe"   />
              </div>
              <Button type="submit" className="w-full"
                loading={form.formState.isSubmitting}
              >
                Accéder
              </Button>
              
              <div className="text-center text-sm">
                Vous n'avez pas de compte?{" "}
                <a href="#" className="underline underline-offset-4">
                  S'inscrire
                </a>
              </div>
            </div>
          </form>
          </Form>

          <div className="bg-muted relative hidden md:block">
            <img
              src="/monster.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      {/* <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
