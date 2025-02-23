import React from "react";

import { Suspense } from "react";
import ProfileAvatar from "./utils/ProfileAvatar";

async function getData() {
	try {
		// placeholder that receives a list of images from picsum (the lorem ipsum of images)
		const data = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
		console.log(data);
		return "https://picsum.photos/200.jpg";
	} catch (error) {
		throw new Error("Failed to fetch data");
	}
}

async function ClientContentWrapper() {
	try {
		const data = await getData();
		if (!data) {
			return <div>No Data Found.</div>;
		}
		return <ClientContent data={data} />;
	} catch (error) {
		return (
			<div className="text-red-500 p-4" role="alert">
				<h2 className="text-lg font-bold">Something went wrong:</h2>
				<p>
					{error instanceof Error
						? error.message
						: "An unexpected error occurred"}
				</p>
			</div>
		);
	}
}

const ClientContent = ({ ...props }: { data: string }) => {
	return (
		<ProfileAvatar picURL={props.data}>
			<span>Child</span>
		</ProfileAvatar>
	);
};

const Account = ({ ...props }: { className?: string }) => {
	return (
		<div className={`${props.className}`}>
			<Suspense
				fallback={
					<div aria-live="polite" aria-busy="true">
						Loading...
					</div>
				}
			>
				<ClientContentWrapper />
			</Suspense>
		</div>
	);
};

export default Account;
