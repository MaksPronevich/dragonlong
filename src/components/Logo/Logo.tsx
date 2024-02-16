import logo from "../../assets/img/logo.svg";
import logoTicker from "../../assets/img/logo-ticker.svg";

export const Logo = (): JSX.Element => {
	return (
		<div className="absolute top-0 inline-flex flex-col items-center gap-2 lg:left-[30%]">
			<img src={logo} width={65} height={65} alt="DRAGON" />
			<img
				src={logoTicker}
				width={150}
				height={24}
				className="hidden lg:inline-block"
				alt="DRAGON"
			/>
		</div>
	);
};
