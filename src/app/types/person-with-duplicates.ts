import { Person } from "./person";

export interface PersonWithDuplicates extends Person {
  duplicates: Array<Person>
}