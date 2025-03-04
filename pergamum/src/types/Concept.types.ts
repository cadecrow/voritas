export interface IConcept {
  id: TodoID;
  title: string;
  description: string;
  explanation: string;
  examples: string[];
  category: string;
  tags: string[];
};

export type ConceptOverview = {
  title: string,
  description: string
};

export type TodoID = string | number;