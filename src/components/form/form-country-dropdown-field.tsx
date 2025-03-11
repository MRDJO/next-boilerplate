import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { CountryDropdown } from "../ui/country-dropdown";

interface FormCountryDropdownFieldProps {
  control: any;
  name: string;
  label: string;
}

const FormCountryDropdownField = ({
  control,
  name,
  label,
}: FormCountryDropdownFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => {

      return (
        <FormItem className="w-full overflow-hidden rounded-lg">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <CountryDropdown
              defaultValue={field.value}
              onChange={(country)=>{
                field.onChange(country.name)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    }}
  />
);

export default FormCountryDropdownField;