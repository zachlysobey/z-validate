import { Predicate } from "../types";

export const nil: Predicate = value => value == null
nil.title = 'nil'
