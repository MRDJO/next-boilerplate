import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import DropDownSearchComponent from "@/components/ui/dropdownsearch_component";

interface FormDropdownFieldProps<T> {
  control: any;
  name: string;
  label: string;
  items: T[];
  displayFn: (item: T) => string;
  getIdFn: (item: T) => string;
  placeholder: string;
  searchPlaceholder: string;
  notFound: string;
}

const FormDropdownField = <T,>({
  control,
  name,
  label,
  items,
  displayFn,
  getIdFn,
  placeholder,
  searchPlaceholder,
  notFound,
}: FormDropdownFieldProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => {
      // Trouve l'élément sélectionné ou retourne `null` si non trouvé
      const selectedValue = items.find((item) => getIdFn(item) === field.value) ?? null;

      return (
        <FormItem className="w-full overflow-hidden rounded-lg">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DropDownSearchComponent
              items={items}
              displayFn={displayFn}
              onSelect={(item) => field.onChange(item ? getIdFn(item) : null)}
              selectedValue={selectedValue}
              placeholder={placeholder}
              searchPlaceholder={searchPlaceholder}
              notFound={notFound}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      );
    }}
  />
);

export default FormDropdownField;