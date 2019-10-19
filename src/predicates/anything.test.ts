import { anything } from './anything'
import { expect } from '../test-setup'

const testCases = [
    [anything(undefined), true],
    [anything(null), true],
    [anything(NaN), true],
    [anything('123'), true],
    [anything(123), true],
    [anything([]), true],
    [anything({}), true],
    [anything(() => {}), true],
]
describe('predicates/anything', () => {
    it('always returns true', () => {
        testCases.forEach(([actual, expected]) => expect(actual).to.equal(expected))
    })
})
