import React from "react";
import HeaderLinks from "./utils/HeaderLinks";

const RootHeader = ({ ...props }: { className?: string }) => {
	return (
		<div className={`flex flex-col items-center w-full ${props.className}`}>
			<span>Header</span>
			<HeaderLinks className="flex w-full justify-center" />
		</div>
	);
};

export default RootHeader;
