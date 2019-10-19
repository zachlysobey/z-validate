import { Predicate } from '../../types'
import { array } from '../array'

export const arrayOf = (
    type: Predicate,
): Predicate => {
    // TODO
    const predicate: Predicate = (value) => array(value) && value.every(type)
    predicate.title = `arrayOf(${type.title})`
    return predicate
}
