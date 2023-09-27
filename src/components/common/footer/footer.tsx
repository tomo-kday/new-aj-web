import React from "react";
import { Typography } from "@/components/ui/typography";
import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";
import { navigation } from "@/data/footer-navigation";
import Link from "next/link";
import NationalParkJapanLogo from "../../../../public/images/national-park-japan-logo-jp.webp";
import Image from "next/image";
import { SNSIconList, SNSIcon } from "../svgs/sns-icons/sns-icons";
import { AngleBracket } from "../svgs/angle-bracket/angle-bracket";

interface FooterProps {
	locale: Locale;
}

const footerTitles = Object.keys(navigation);

export default async function Page({ locale }: FooterProps) {
	// get dictionary on component

	const dictionary = await getDictionary(locale, "footer");

	return (
		<footer className="w-full mx-auto lg:w-11/12 lg:pb-10">
			<div className="px-4 container mx-auto grid grid-cols-1 lg:px-0 lg:grid-cols-4 gap-8">
				<div className="lg:mx-auto">
					<Typography variant={"h4"} as="h3" className="pb-3">
						{dictionary[footerTitles[0]]}
					</Typography>
					<ul className="grid grid-cols-2 gap-3 lg:gap-y-2 lg:grid-cols-1 lg:col-span-1 lg:mx-auto">
						{navigation.旅のおすすめ情報.map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm py-5 px-2 rounded-md bg-neutral-100 lg:p-0 lg:bg-inherit"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4"
								>
									{dictionary[ele.name]}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<Typography variant={"h4"} as="h3" className="pb-3">
						{dictionary[footerTitles[1]]}
					</Typography>
					<ul className="grid grid-cols-2 gap-3 lg:gap-0 lg:grid-cols-1 lg:col-span-1 lg:mx-auto lg:flex lg:flex-wrap">
						{navigation[
							"国内のアクティビティの格安予約はアクティビティジャパンで！"
						].map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm p-4 rounded-md bg-neutral-100 lg:flex lg:p-0 lg:bg-inherit lg:mb-2"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:mr-2 lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4 lg:min-w-max"
								>
									{dictionary[ele.name]}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
								<div className="lg:border-l lg:border-gray-200 lg:rounded-none lg:pl-2" />
							</li>
						))}
					</ul>
				</div>
				<div className="lg:col-span-1 lg:mx-auto">
					<ul className="mb-10">
						<Typography variant={"h4"} as="h3" className="pb-3">
							{dictionary[footerTitles[2]]}
						</Typography>
						{navigation["アクティビティ事業者・法人向け"].map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm p-4 rounded-md bg-neutral-100 lg:p-0 lg:bg-inherit mb-2"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4"
								>
									{ele.name in dictionary ? dictionary[ele.name] : ele.name}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
							</li>
						))}
					</ul>
					<ul className="mb-10">
						<Typography variant={"h4"} as="h3" className="pb-3 pt-3 lg:pt-0">
							{dictionary[footerTitles[3]]}
						</Typography>
						{navigation["KKdayグループのサービスサイト"].map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm p-4 rounded-md bg-neutral-100 lg:p-0 lg:bg-inherit mb-2"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4"
								>
									{ele.name in dictionary ? dictionary[ele.name] : ele.name}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
							</li>
						))}
					</ul>
					<ul>
						<Typography variant={"h4"} as="h3" className="pb-3 pt-3 lg:pt-0">
							{dictionary[footerTitles[4]]}
						</Typography>
						{navigation["その他、旅行系サイト"].map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm p-4 rounded-md bg-neutral-100 lg:p-0 lg:bg-inherit mb-2"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4"
								>
									{ele.name in dictionary ? dictionary[ele.name] : ele.name}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="lg:col-span-1 lg:mx-auto">
					<ul className="mb-10">
						<Typography variant={"h4"} as="h3" className="pb-3">
							{footerTitles[5]}
						</Typography>
						{navigation["Q&A"].map((ele, idx) => (
							<li
								key={idx}
								className="text-dim-gray text-sm p-4 rounded-md bg-neutral-100 lg:p-0 lg:bg-inherit mb-2"
							>
								<Link
									href={ele.href}
									className="flex justify-between lg:block lg:hover:underline lg:hover:decoration-dim-gray lg:hover:underline-offset-4"
								>
									{ele.name in dictionary ? dictionary[ele.name] : ele.name}
									{AngleBracket("right", "w-5 h-5 self-center lg:hidden")}
								</Link>
							</li>
						))}
					</ul>
					<Image
						src={NationalParkJapanLogo}
						className="max-w-full h-auto"
						alt="国立公園オフィシャルパートナーロゴ"
						width={200}
						height={57}
					/>
					<div className="lg:mt-6 flex">
						{SNSIconList.map((variant) => {
							return (
								<React.Fragment key={variant.snsName}>
									<Link
										href={variant.snsName}
										className="px-2 lg:hover:opacity-80"
									>
										{SNSIcon(variant.snsName)}
									</Link>
								</React.Fragment>
							);
						})}
					</div>
					<div className="my-4 text-xs">Copyright &copy; ACTIVITY JAPAN</div>
				</div>
			</div>
		</footer>
	);
}
