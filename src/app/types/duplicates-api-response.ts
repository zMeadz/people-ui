import { PersonApiResponse } from "./person-api-response";

export interface DuplicatesApiResponse {
  record: PersonApiResponse
  matches: Array<PersonApiResponse>
}