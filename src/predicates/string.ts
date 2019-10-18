import { Predicate } from '../types'

export const string: Predicate = (value: any): value is string => typeof value === 'string'
