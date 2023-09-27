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
	"zh-cht": (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/zh-cht.json`).then(
			(module) => module.default
		),
	"zh-chs": (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/zh-chs.json`).then(
			(module) => module.default
		),
	ko: (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/ko.json`).then(
			(module) => module.default
		),
	th: (component: LocalizeComponents) =>
		import(`@/dictionaries/${component}/th.json`).then(
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
