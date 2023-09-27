import "server-only";
import { LocalizeComponents } from "../types/i18-types";
import { Locale } from "@/config/i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	jp: (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/jp.json`).then(
			(module) => module.default
		),
	ch: (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/ch.json`).then(
			(module) => module.default
		),
	en: (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/en.json`).then(
			(module) => module.default
		),
};

export const getDictionary = async (
	locale: Locale,
	component: LocalizeComponents
) => {
	return dictionaries[locale]?.(component) ?? dictionaries.jp(component);
};
