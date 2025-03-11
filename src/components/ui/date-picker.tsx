"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn, formatDateToFrench } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  onDateChange,
  placeholder = "Choisir une date",
  fromDate,
  disabled = false,
  value,
}: {
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  fromDate?: Date;
  disabled?: boolean;
  value?: Date;
}) {
  const [date, setDate] = React.useState<Date | undefined>(value ?? undefined);

  const handleDateChange = (newDate: Date | undefined) => {
    if (!newDate) return;

    setDate(newDate);
    onDateChange?.(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          disabled={disabled}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? formatDateToFrench(date) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          fromDate={fromDate}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
