import { Predicate } from '../../types'

export const either = (
    predicateA: Predicate,
    predicateB: Predicate,
): Predicate => {
    const predicate: Predicate = value => predicateA(value) || predicateB(value)
    predicate.title = `either(${predicateA.name}, ${predicateB.name})`
    return predicate
}
