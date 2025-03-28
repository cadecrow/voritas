import React from "react";
import { IConcept, TodoID } from "@/types/Concept.types";
import Image from 'next/image'

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
			<Image
				// todo - extract values from generic ConceptHeader type
				src={}
				alt={`Title of card: ${props.concept.title}`}
				width={}
				height={}
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
