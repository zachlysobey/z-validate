import { Predicate } from '../../types'

export const either = (
    predicateA: Predicate,
    predicateB: Predicate,
): Predicate =>
    value => predicateA(value) || predicateB(value)
