import { SocialsPanelProps } from "./SocialsPanel.props.ts";

export const SocialsPanel = ({ socials }: SocialsPanelProps): JSX.Element => {
	return (
		<div className="absolute right-0 top-0 z-[40] flex items-center gap-10 lg:bottom-0 lg:left-1/2 lg:right-auto lg:top-auto lg:-translate-x-1/2 lg:translate-y-1/2">
			<div className="hidden whitespace-nowrap font-han-zi text-sm lg:block">
				© {new Date().getFullYear()} Dragon. All rights reserved.
			</div>
			<div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-3">
				{socials.map(({ name, link }, index) => (
					<a
						href={link}
						key={index}
						className="inline-flex h-10 w-10 items-center justify-center transition lg:border-2 lg:hover:border-yellow"
						target="_blank"
						rel="noreferrer"
					>
						<img src={`/img/socials/${name}.svg`} alt={name} />
					</a>
				))}
			</div>
		</div>
	);
};
