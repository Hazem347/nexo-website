import { en } from "./en";
import { fa } from "./fa";
import { Language } from "../context/LanguageContext";

export const getDictionary = (lang: Language) => {
  return lang === "en" ? en : fa;
};

export type Dictionary = typeof en;
