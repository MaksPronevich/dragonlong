import decor from "../../assets/img/bg-decor.svg";

export const Decor = (): JSX.Element => {
	return (
		<>
			<img
				src={decor}
				className={`absolute left-0 top-0 z-10 hidden w-[11%] rotate-180 lg:block`}
				alt="decor"
			/>
			<img
				src={decor}
				className={`absolute right-0 top-0 z-10 hidden w-[11%] -rotate-90 lg:block`}
				alt="decor"
			/>
			<img
				src={decor}
				className={`absolute bottom-0 left-0 z-10 hidden w-[11%] rotate-90 lg:block`}
				alt="decor"
			/>
			<img
				src={decor}
				className={`absolute bottom-0 right-0 z-10 hidden w-[11%] lg:block`}
				alt="decor"
			/>
		</>
	);
};
