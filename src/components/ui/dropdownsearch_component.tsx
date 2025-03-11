"use client";

import { ChevronsUpDown } from "lucide-react";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DropDownSearchComponentProps<T> {
  items: T[];
  displayFn: (item: T) => string;
  onSelect: (item: T | null) => void;
  selectedValue: T | null;
  placeholder?: string;
  searchPlaceholder?: string;
  notFound?: string;
  className?: string;
}

export default function DropDownSearchComponent<T>({
  items,
  displayFn,
  onSelect,
  selectedValue,
  placeholder = "Sélectionner un élément...",
  searchPlaceholder = "Rechercher un élément...",
  notFound = "Aucun élément trouvé.",
  className,
}: DropDownSearchComponentProps<T>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(
    selectedValue ? displayFn(selectedValue) : ""
  );

  const selectedItem = items.find((s) => displayFn(s) === value);
  const isListEmpty = items.length === 0;

  useEffect(() => {
    setValue(selectedValue ? displayFn(selectedValue) : "");
  }, [selectedValue, displayFn]);

  const handleSelect = (value: T) => {
    setValue(displayFn(value));
    onSelect(value);
  };

  return (
    <div className={`${className ?? "flex my-4"}`}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={isListEmpty}
            className={`${
              className ? "w-full" : "w-[500px] justify-between"
            } flex`}
          >
            {value
              ? selectedItem !== undefined
                ? displayFn(selectedItem!)
                : placeholder
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px] p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandEmpty>{notFound}</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {items.map((item) => (
                  <CommandItem
                    key={displayFn(item)}
                    value={displayFn(item)}
                    onSelect={(currentValue: any) => {
                      setValue(currentValue === value ? "" : currentValue);
                      const f = items.find(
                        (e) => displayFn(e) === currentValue
                      );
                      if (f !== undefined) {
                        handleSelect(f);
                      }

                      setOpen(false);
                    }}
                  >
                    {displayFn(item)}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
