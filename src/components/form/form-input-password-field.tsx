import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordInput from "../ui/password-input";
interface FormInputPasswordFieldProps {
  control: any; 
  name: string;
  label: string;
  inputProps?: React.ComponentProps<typeof Input>; 
}

const FormInputPasswordField: React.FC<FormInputPasswordFieldProps> = ({ control, name, label, inputProps }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <PasswordInput {...field} {...inputProps} 
             value={field.value || ""}
             onChange={(e) => field.onChange(inputProps?.type === "number" ? Number(e.target.value) : e.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInputPasswordField;