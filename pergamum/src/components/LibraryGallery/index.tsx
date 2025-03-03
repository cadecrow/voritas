import React from "react";
import { Suspense } from "react";
import { OverviewBook } from "@/types/Book.types";
import BookOverview from "../BookOverview";
import { Button } from "../ui/button";
import Image from "next/image";

async function getData(): Promise<OverviewBook[]> {
	const res = await fetch("http://localhost:3000/api/dummy");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const data = await res.json();
	return data;
}

async function ClientContentWrapper() {
	try {
		const data = await getData();
		if (!data || data.length === 0) {
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

// ADD YOUR CLIENT COMPONENT HERE
const ClientContent = ({ ...props }: { data: OverviewBook[] }) => {
	return (
		<>
			{props.data.map((book, index) => (
				<Button key={index} className="m-4">
					<Image src={"/file.svg"} alt={book.title} width={20} height={30} />
				</Button>
			))}
		</>
	);
};

const LibraryGallery = ({ ...props }: { className?: string }) => {
	return (
		<div className={`overflow-y-auto ${props.className}`}>
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

export default LibraryGallery;
