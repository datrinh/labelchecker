import { JsonFeature } from './data.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export declare class CommunicationService {
    private http;
    data: JsonFeature[];
    constructor(http: HttpClient);
    loadData(src?: string): Observable<JsonFeature[]>;
    /** Mocking data to add unlabeled data and selectionScore (entropy) */
    enhanceFeatures(data: JsonFeature[]): JsonFeature[];
}
