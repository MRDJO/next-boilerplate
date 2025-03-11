import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
interface FormInputFieldProps {
  control: any; 
  name: string;
  label: string;
  inputProps?: React.ComponentProps<typeof Input>; 
}

const FormInputField: React.FC<FormInputFieldProps> = ({ control, name, label, inputProps }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} {...inputProps} 
             value={field.value || ""}
             onChange={(e) => field.onChange(inputProps?.type === "number" ? Number(e.target.value) : e.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormInputField;