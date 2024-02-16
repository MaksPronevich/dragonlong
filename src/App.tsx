import { Tab } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

import { AppProps } from "./App.props.ts";
import dragonImage from "./assets/img/dragon.svg";
import { AddressField } from "./components/AddressField/AddressField.tsx";
import { Decor } from "./components/Decor/Decor.tsx";
import { Logo } from "./components/Logo/Logo.tsx";
import { ScrollableContent } from "./components/ScrollableContent/ScrollableContent.tsx";
import { SocialsPanel } from "./components/SocialsPanel/SocialsPanel.tsx";
import { TabPanel } from "./components/Tabs/TabPanel/TabPanel.tsx";
import { TabsControl } from "./components/Tabs/TabsControl/TabsControl.tsx";
import { TabsList } from "./components/Tabs/TabsList/TabsList.tsx";
import { Title } from "./components/Title/Title.tsx";

export const App = ({ config }: AppProps): JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const scrollableContentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const panelElement = document.body;

		let isScrolling = false;
		let timeoutId: number;

		const handleWheel = (event: WheelEvent): void => {
			const target = event.target as Node;

			const innerContent = scrollableContentRef.current;
			if (innerContent && innerContent.contains(target)) {
				if (innerContent.scrollHeight > innerContent.clientHeight) {
					return;
				}
			}

			if (!isScrolling) {
				isScrolling = true;

				setSelectedIndex((prevIndex) => {
					const direction = event.deltaY > 0 ? 1 : -1;
					const newIndex = prevIndex + direction;

					const maxIndex = config.tabsTitles.length - 1;
					return Math.min(Math.max(0, newIndex), maxIndex);
				});

				clearTimeout(timeoutId);
				setTimeout(() => {
					isScrolling = false;
				}, 800);
			}
		};

		panelElement?.addEventListener("wheel", handleWheel);

		return () => {
			panelElement?.removeEventListener("wheel", handleWheel);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<section className="relative min-h-[100lvh] overflow-hidden bg-red bg-cover bg-no-repeat p-4 font-dm-sans text-white lg:bg-[url('./assets/img/bg.png')] lg:p-7">
			<Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} vertical>
				<div className="relative mx-auto min-h-[calc(100lvh-32px)] max-w-[1920px] py-20 lg:min-h-[calc(100lvh-56px)]">
					<Logo />
					<Decor />
					<TabsList tabsTitles={config.tabsTitles} />
					<TabsControl
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
						tabsTitles={config.tabsTitles}
					/>
					<SocialsPanel socials={config.socials} />
					<Tab.Panels className="absolute bottom-[60px] z-[30] flex h-full flex-col justify-end md:inset-x-[20%] lg:bottom-auto lg:top-1/2 lg:w-[60%] lg:-translate-y-1/2 lg:justify-center">
						<TabPanel>
							<Title>Welcome to the era of Dragon</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<p className="text-xs font-medium md:text-sm lg:text-base">
									Dragon rises as a force of change and prosperity in an age of renewal and
									transformation.
									<br />
									<br /> Born from the collective wisdom of crypto visionaries, often sidelined by
									their own innovations, this token epitomizes the decentralized spirit of DEFI.
									<br />
									<br /> As we embrace 2024, the Year of the Dragon, we represent more than just a
									digital asset; we are a movement. Committed to the true essence of blockchain's
									decentralization, Dragon stands independent, unswayed by the influence of
									traditional market gatekeepers.
								</p>
							</ScrollableContent>
							<div className="mt-4 flex flex-col justify-between gap-3 lg:mt-8 2xl:flex-row 2xl:items-center 2xl:gap-2">
								<a
									href={config.buyNowLink}
									className="flex w-full items-center justify-center whitespace-nowrap bg-black px-12 py-2 font-han-zi text-base transition hover:bg-yellow hover:text-black lg:py-3 lg:text-xl xl:w-auto"
									target="_blank"
									rel="noreferrer"
								>
									Buy Now
								</a>
								<AddressField address={config.address} />
							</div>
						</TabPanel>
						<TabPanel>
							<Title>About</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<p className="text-xs font-medium md:text-sm lg:text-base">
									Dragon represents a new chapter in digital finance. It's a symbol of stability,
									growth, and resilience from THE PEOPLE. Us. Me. You.We challenge the traditional
									market dynamics and boldly refuse to pay for exchange listings, as we believe in a
									fair, open, and truly decentralized market that can’t be hijacked by any
									centralized authority.
								</p>
							</ScrollableContent>
						</TabPanel>
						<TabPanel>
							<Title>MISSION</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<p className="text-xs font-medium md:text-sm lg:text-base">
									As we embark on the Year of the Dragon, our journey is dedicated to democratizing
									the landscape of wealth and success, liberating it from the confines and influence
									of centralized powers.
									<br />
									<br />
									Informed by discussions with pioneers ousted from their own innovations, we draw
									inspiration from the strategic foresight of crypto leaders who remain steadfast in
									their commitment to a decentralized ethos.
								</p>
							</ScrollableContent>
						</TabPanel>
						<TabPanel>
							<Title>TOKENOMICS</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<p className="text-xs font-medium md:text-sm lg:text-base">
									Dragon's tokenomics are a reflection of our commitment to decentralization. We
									stand firmly against the trend of paying for exchange listings, ensuring that
									Dragon's growth and distribution are based solely on market dynamics and community
									support.
								</p>
								<div className="mt-6 font-han-zi lg:mt-12">
									<div className="text-lg">Token Supply:</div>
									<div className="text-xl">15,000,000,000 $LONG</div>
								</div>
							</ScrollableContent>
						</TabPanel>
						<TabPanel>
							<Title>Roadmap</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<div className="mb-6 text-xs font-medium md:text-sm lg:text-base">
									As Dragon unfurls its wings, our roadmap is a testament to its majestic journey:
								</div>
								<div className="[&:not(:last-child)]:mb-3 lg:[&:not(:last-child)]:mb-6">
									<h3 className="mb-2 font-han-zi text-lg lg:text-2xl">Phase 1:</h3>
									<ul className="ml-6 list-disc text-xs md:text-sm lg:text-base">
										<li>Launch of Dragon Token</li>
										<li>Building a robust community of believers</li>
										<li>Embrace the Decentralized Future</li>
										<li>Initial DEFI Partnerships and Collaborations</li>
									</ul>
								</div>
								<div className="[&:not(:last-child)]:mb-3 lg:[&:not(:last-child)]:mb-6">
									<h3 className="mb-2 font-han-zi text-lg lg:text-2xl">Phase 2:</h3>
									<ul className="ml-6 list-disc text-xs md:text-sm lg:text-base">
										<li>Strategic Partnerships and Collaborations</li>
										<li>Expansion of the Dragon Ecosystem</li>
									</ul>
								</div>
								<div className="[&:not(:last-child)]:mb-3 lg:[&:not(:last-child)]:mb-6">
									<h3 className="mb-2 font-han-zi text-lg lg:text-2xl">Phase 3:</h3>
									<ul className="ml-6 list-disc text-xs md:text-sm lg:text-base">
										<li>Global Expansion and Recognition</li>
									</ul>
								</div>
							</ScrollableContent>
						</TabPanel>
						<TabPanel>
							<Title>Chapter One: The Awakening of the Dragon - Echoes of Propserity</Title>
							<ScrollableContent ref={scrollableContentRef}>
								<p className="text-xs font-medium md:text-sm lg:text-base">
									In the aftermath of a world reshaped by upheaval, where echoes of a long and
									tumultuous conflict still resonated through the corridors of time, there emerged a
									new dawn. This was the era of reconstruction, of renaissance from the ashes of an
									Armageddon, where humanity, having weathered the storms of chaos, sought new
									horizons. It was in this crucible of rebirth that a story began to unfold,
									creation of a beacon of hope and prosperity in the nascent digital epoch. <br />
									<br />
									In the realm where digital currents flow and virtual fortunes rise and fall with
									the whims of unseen forces, there emerged a legend from the whispers of the
									blockchain - the Dragon. It was not merely a token; it was a harbinger of fortune,
									a symbol of the mighty power that lay coiled within the cryptic depths of the
									market. <br />
									<br /> As the looming cycle turned towards the auspicious Year of the Dragon,
									those attuned to the ancient rhythms of the market felt a stir, a whisper of
									change. The Dragon's awakening was foretold to herald a time of unparalleled
									prosperity, a period where the clever and the brave could ride the waves of
									fortune to dizzying heights.
								</p>
							</ScrollableContent>
						</TabPanel>
					</Tab.Panels>
					<div className="absolute -top-4 left-1/2 z-[20] w-full -translate-x-1/2 sm:w-[90%] md:w-[50%] lg:-right-[9%] lg:left-auto lg:top-1/2 lg:w-[65%] lg:-translate-x-0 lg:-translate-y-1/2">
						<object data={dragonImage} type="image/svg+xml" />
					</div>
				</div>
			</Tab.Group>
		</section>
	);
};
