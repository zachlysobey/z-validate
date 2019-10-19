import { Predicate } from "../types";

export const anything: Predicate = ({ ..._ }) => true
anything.title = 'anything'
