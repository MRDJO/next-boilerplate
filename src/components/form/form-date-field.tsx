import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { DatePicker } from "@/components/ui/date-picker";
import {  formatDateToFrenchWithTZ } from "@/lib/utils";

interface FormDateFieldProps {
  control: any; 
  name: string;
  label: string;
  placeholder?: string;
}

const FormDateField: React.FC<FormDateFieldProps> = ({ control, name, label, placeholder }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className="flex flex-col gap-4"  >
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DatePicker
              onDateChange={(date) =>
                field.onChange(formatDateToFrenchWithTZ(date))
              }
              value={field.value ? new Date(field.value) : undefined}
              placeholder={placeholder}
            />
          </FormControl>
        </div>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormDateField;