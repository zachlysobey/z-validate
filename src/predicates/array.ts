import { Predicate } from "../types";

export const array: Predicate = (value): value is Array<any> => Array.isArray(value)
array.title = 'array'
