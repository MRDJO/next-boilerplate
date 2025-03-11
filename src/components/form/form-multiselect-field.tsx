import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { MultiSelect } from "@/components/ui/multi-select";

interface FormMultiSelectFieldProps {
  control: any; 
  name: string;
  label: string;
  options:  {
    label: string;
    value: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
}[]
}

const FormMultiSelectField: React.FC<FormMultiSelectFieldProps> = ({ control, name, label , options}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
        <MultiSelect
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        options={options}
                      />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormMultiSelectField;