import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

interface FormBooleanFieldProps {
  control: any; 
  name: string;
  label: string;
}

const FormBooleanField: React.FC<FormBooleanFieldProps> = ({ control, name, label }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
       <div className="border p-2 py-4 rounded-lg  flex justify-between items-center text-center"  >
        <FormLabel className="mr-4">{label}</FormLabel>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
       </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormBooleanField;