export const i18n = {
	defaultLocale: "jp",
	locales: ["jp", "en", "zh-cht", "zh-chs", "ko", "th"],
	domains: [
		{
			domain: "localhost",
			defaultLocale: "jp",
			http: true,
		},
		{
			domain: "en.localhost",
			defaultLocale: "en",
			http: true,
		},
		{
			domain: "zh-cht.localhost",
			defaultLocale: "zh-cht",
			http: true,
		},
		{
			domain: "zh-chs.localhost",
			defaultLocale: "zh-chs",
			http: true,
		},
		{
			domain: "ko.localhost",
			defaultLocale: "ko",
			http: true,
		},
		{
			domain: "th.localhost",
			defaultLocale: "th",
			http: true,
		},
	],
} as const;

export type Locale = (typeof i18n)["locales"][number];
