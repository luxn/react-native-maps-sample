import { SampleApiResponse, SampleApiRequest } from "./dto/Sample";

export interface ApiClient {
    sampleCall(request: SampleApiRequest): Promise<SampleApiResponse>;
}
