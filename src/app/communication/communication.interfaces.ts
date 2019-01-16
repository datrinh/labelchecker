export interface Progress {
  total: number;
  done: number;
}

export interface Document {
  id: string;
  text: string;
}

export interface Answer {
  documentId: string;
  questionId: string;
  answer: string;
}

export interface User {
  active: boolean;
  timestamp: number;
  timestampCreated: number;
  customer: string;
  datasetId: string;
  id: number;
  username: string;
  jwtToken: {
    token: string;
  };
}
