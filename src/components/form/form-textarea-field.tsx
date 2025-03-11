import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface FormTextareaFieldProps {
  control: any; 
  name: string;
  label: string;
}

const FormTextareaField: React.FC<FormTextareaFieldProps> = ({ control, name, label }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormTextareaField;