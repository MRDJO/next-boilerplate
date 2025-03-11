import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "../ui/phone-input";
interface FormPhoneInputFieldProps {
  control: any; 
  name: string;
  label: string;
  inputProps?: React.ComponentProps<typeof Input>; 
}

const FormPhoneInputField: React.FC<FormPhoneInputFieldProps> = ({ control, name, label, inputProps }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <PhoneInput {...field} {...inputProps} 
             value={field.value || ""}
             onChange={(e) => field.onChange(inputProps?.type === "number" ? (e) : e)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormPhoneInputField;