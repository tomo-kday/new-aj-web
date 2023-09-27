import { i18n } from "@/config/i18n-config";

export function getSubdomainFromUrl(url: string) {
	// console.log("🚀 ~ file: get-subdomain-url.ts:4 ~ getSubdomainFromUrl ~ url:", url)
	// Split the hostname by periods (.)
	const hostnameParts = url.split(".");
	// console.log("🚀 ~ file: get-subdomain-url.ts:7 ~ getSubdomainFromUrl ~ hostnameParts:", hostnameParts)

	// Check if there is a subdomain (at least 3 parts) and the first part is not "www" (default language)
	if (hostnameParts?.length <= 1) {
		return i18n.defaultLocale;
	}
	if (hostnameParts[0] !== "www") {
		// Extract and return the subdomain (first part)
		return hostnameParts[0];
	} else {
		// No subdomain found or default language selected
		return hostnameParts[1];
	}
}
