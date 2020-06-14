import { AxiosInstance } from 'axios';
import { ApiClient } from "./Api";
import { SampleApiResponse, SampleApiRequest } from './dto/Sample';

export class NetworkApiClient implements ApiClient {
    httpClient: AxiosInstance
    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient;
    }

    sampleCall(request: SampleApiRequest): Promise<SampleApiResponse> {
        return this.httpClient.post("/sample", request);
    }
}
