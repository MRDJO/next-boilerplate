"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "@bprogress/next/app";
import { useForm } from "react-hook-form";
import {
  LoginFormValues,
  loginValidator,
} from "@/features/user/user.validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import FormInputField from "./form/form-input-field";
import FormInputPasswordField from "./form/form-input-password-field";
import { loginAction } from "@/features/user/user.actions";
import { DASHBOARDSTARTPATH } from "@/lib/config";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginValidator),
    defaultValues: {
      username: undefined,
      password: undefined,
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await loginAction(values.username, values.password);
      if (response.code === 200) {
        router.push(DASHBOARDSTARTPATH);
      } else {
        toast.error(response.message ?? "Invalid credentials", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error are occured", { position: "top-center" });
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              className="p-6 md:p-8 py-14"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome !</h1>
                  <p className="text-muted-foreground text-balance">
                     Put your credentials to login
                  </p>
                </div>
                <div className="grid gap-3">
                  <FormInputField
                    name="username"
                    control={form.control}
                    label="Username"
                  />
                </div>
                <div className="grid gap-3">
                  <FormInputPasswordField
                    name="password"
                    control={form.control}
                    label="Password"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  loading={form.formState.isSubmitting}
                >
                  Go!!
                </Button>
                <div className="text-center text-sm">
                  Don't have an account ?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Signup
                  </a>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/38888.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
