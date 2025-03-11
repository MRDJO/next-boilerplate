import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { format } from "date-fns";
import { fr } from "date-fns/locale/fr";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDateToFrench = (date: Date | undefined | string | null) => {
  if (!date) return "";
  try {
    const dateObject = typeof date === "string" ? new Date(date) : date;
    return format(dateObject, "d MMMM yyyy", { locale: fr });
  } catch (error) {
    console.error("Erreur lors du formatage de la date:", error);
    return "";
  }
};


export const formatDateToFrenchWithTZ = (date: Date | string | null | undefined): string => {
  if (!date) return "";

  try {
    // Convertit la chaîne ou l'objet Date en un objet Date valide
    const dateObject = typeof date === "string" ? new Date(date) : date;

    // Vérifie que la date est valide
    if (isNaN(dateObject.getTime())) {
      throw new Error("Date invalide");
    }

    // Formatte la date au format souhaité
    return format(dateObject, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", { locale: fr });
  } catch (error) {
    console.error("Erreur lors du formatage de la date:", error);
    return "";
  }
};

