export interface JsonFeature {
    id: number;
    'default-context': string;
    features: Features;
    values: {
        [key: string]: string;
    };
}
export interface Features {
    '1': {
        [key: string]: number;
    };
}
export interface Answer {
    documentId: string;
    questionId: string;
    answer: string;
}
/** Single data object */
export interface DataObject {
    objectId: string;
    position: {
        x: number;
        y: number;
    };
    selectionScore: number;
    /** Numeric Value of a feature */
    featureValues: {
        [key: string]: number;
    };
    /** Human readable representation of feature */
    featureRepresentations: {
        [key: string]: string;
    };
}
export interface ObjectToLabel {
    versionId: string;
    questionIds: string[];
    toBeLabeledFeatures: string[];
    isLabeledBy: string[];
    shownFeatures: string[];
    dataObject: DataObject;
}
export interface FeaturesQuestionMapping {
    questionId: string;
    possibleAnswers: string[];
}
export interface LabeledData {
    objectId: number;
    labellingFinished: boolean;
    answers: Answer[];
}
/** Data set returned from backend */
export interface DataSet {
    dataObjects: DataObject[];
    datasetId: string;
    metrics: [{
        versionId: string;
        metrics: {
            [key: string]: number;
        };
    }];
}
/** (Single) labeled answer to be sent to backend */
export interface LabelOutput {
    dataObjectId: string;
    dataSetId: string;
    userId: string;
    questionId: string;
    customerId: string;
    /** Options might change in the future */
    answer: 'yes' | 'no' | 'maybe';
}
export interface BackendResponse {
    objectId: number | string;
    versionId: number;
    'default-context': string;
    labeledBy: string[];
    text: string;
    toBeLabeled: ToBeLabeled[];
    displayFeature: string[];
    reductionAlgorithm: string;
    selectionScore: number;
    featuresValues: FeaturesValues;
    featureRepresentations: {
        [key: string]: string;
    };
}
interface FeaturesValues {
    '1': {
        [key: string]: number;
    };
}
interface ToBeLabeled {
    featureId: string;
    question: Question;
}
interface Question {
    questionId: string;
    customerId: string;
    possibleAnswers: string[];
}
export {};
