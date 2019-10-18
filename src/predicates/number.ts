import { Predicate } from '../types'

export const number: Predicate = (value: any): value is number => typeof value === 'number' && !isNaN(value)
