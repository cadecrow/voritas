import React from "react";
import { IConcept, TodoID } from "@/types/Concept.types";

export const ConceptOverview = ({
	...props
}: {
	concept: IConcept;
	handleClick: (id: TodoID) => void;
	containerClassName?: string;
}) => {
	return (
		<div
			className={`cursor-pointer hover:opacity-80 transition-opacity ${props.containerClassName}`}
			onClick={() => props.handleClick(props.concept.id)}
		>
			<img
				src={"https://localhost:3000/file.svg"}
				alt={props.concept.title}
				className="w-full h-48 object-cover"
			/>
			<h3 className="mt-2 text-center">{props.concept.title}</h3>
		</div>
	);
};

export const ConceptExpandable = ({
	...props
}: {
	explanation: string;
	containerClassName?: string;
}) => {
	return (
		<div
			className={`w-full bg-gray-100 p-4 mt-4 rounded-lg ${props.containerClassName}`}
		>
			<p className="text-gray-700">{props.explanation}</p>
		</div>
	);
};
