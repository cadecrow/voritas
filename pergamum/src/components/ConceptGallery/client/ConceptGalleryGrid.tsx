"use client";

import React, { useState } from "react";
import { IConcept, TodoID } from "@/types/Concept.types";
import { ConceptExpandable, ConceptOverview } from "@/components/ConceptItem";

const ConceptGalleryGrid = ({
	...props
}: {
	concepts: IConcept[];
	containerClassName?: string;
}) => {
	const [expandedItemId, setExpandedItemId] = useState<TodoID | null>(null);

	const handleItemClick = (itemId: TodoID) => {
		// If the clicked item is already expanded, collapse it
		setExpandedItemId(expandedItemId === itemId ? null : itemId);
	};

	return (
		<div className={`grid grid-cols-5 gap-4 ${props.containerClassName}`}>
			{props.concepts.map((concept) => (
				<div key={concept.id} className="relative border border-white">
					<ConceptOverview concept={concept} handleClick={handleItemClick} />

					{/* Expandable Details Section
					{expandedItemId === concept.id && (
						<ConceptExpandable explanation={concept.explanation} />
					)} */}
				</div>
			))}
		</div>
	);
};

export default ConceptGalleryGrid;
