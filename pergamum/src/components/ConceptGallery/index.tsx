import React from "react";
import { Suspense } from "react";
import { ConceptOverview, IConcept } from "@/types/Concept.types";
import { dummyConcepts } from "../../../public/data/dummydata";
import ConceptGalleryGrid from "./client/ConceptGalleryGrid";

async function getData(): Promise<IConcept[]> {
	// const res = await fetch("http://localhost:3000/api/dummy");
	// if (!res.ok) {
	// 	throw new Error("Failed to fetch data");
	// }
	// const data = await res.json();
  const data = dummyConcepts;
	return data;
}

async function ClientContentWrapper() {
	// todo add data validation
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
const ClientContent = ({ ...props }: { data: IConcept[] }) => {
	return (
		<ConceptGalleryGrid concepts={props.data} />
	);
};

const ConceptGallery = ({ ...props }: { className?: string }) => {
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

export default ConceptGallery;
