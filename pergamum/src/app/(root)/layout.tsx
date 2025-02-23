import RootHeader from "@/components/composite/RootHeader";
import React from "react";

const Layout = ({ ...props }: { children: React.ReactNode }) => {
	return (
		<main className={`root-container`}>
			<RootHeader />
			{props.children}
		</main>
	);
};

export default Layout;
