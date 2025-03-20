export interface IConcept {
  id: TodoID;
  title: string;
  description: string;
  explanation: string;
  examples: string[];
  category: string;
  tags: string[];
}

export type ConceptOverview = {
  title: string;
  description: string;
};

export type TodoID = string | number;

enum ConceptHeaderComponent {
  Image = 'image',
  Text = 'text',
  TextOverlay = 'textoverlay',
  CustomComponent = 'custom',
}

interface ImageConceptHeader {
  src: string;
  width: string;
  height: string;
  alt: string;
};

interface TextConceptHeader {
  title: string;
  subtitle?: string;
};

interface ConceptHeader<T> {
  contents: T;
}

// export type ConceptHeader = {
//   [key: string]: any;
// } & (ImageConceptHeader | { text?: string; [key: string]: any });
