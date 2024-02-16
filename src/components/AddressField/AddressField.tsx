import { useState } from "react";

import { SvgCopy } from "../SvgCopy/SvgCopy.tsx";
import { AddressFieldProps } from "./AddressField.props.ts";

export const AddressField = ({ address, className }: AddressFieldProps): JSX.Element => {
	const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

	const copyHandler = (copiedText: string): void => {
		navigator.clipboard.writeText(copiedText);
		setIsNotificationVisible(true);
		setTimeout(() => {
			setIsNotificationVisible(false);
		}, 500);
	};

	return (
		<div
			className={`relative flex min-w-0 items-center justify-between gap-4 border-b border-r border-white p-2 lg:p-3 ${className}`}
		>
			<div className="select-none truncate text-xs/6 font-medium">{address}</div>
			<button onClick={(): void => copyHandler(address)}>
				<SvgCopy />
			</button>
			{isNotificationVisible && (
				<span className="absolute -bottom-[37px] right-0 rounded-lg bg-white px-3 py-1 text-sm text-black shadow-lg">
					Copied
				</span>
			)}
		</div>
	);
};
