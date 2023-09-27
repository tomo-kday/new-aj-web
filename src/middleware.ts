import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSubdomainFromUrl } from "./utils/get-subdomain-url";

function getLocale(request: NextRequest): string | undefined {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// console.log("🚀 ~ file: middleware.ts:9 ~ getLocale ~ negotiatorHeaders:", negotiatorHeaders)

	const lang_locale = getSubdomainFromUrl(negotiatorHeaders.host);
	// console.log("🚀 ~ file: middleware.ts:13 ~ getLocale ~ lang_locale:", lang_locale)
	return lang_locale;
}

export function middleware(request: NextRequest) {
	// console.log("🚀 ~ file: middleware.ts:18 ~ middleware ~ request:", request)
	console.log("middleware fired 🧨");
	const host = request.nextUrl.host;
	const locale = getLocale(request);
	return NextResponse.rewrite(new URL(`/${locale}.${host}`, request.url));
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
	// Optional: only run on root (/) URL
	// '/'
};
