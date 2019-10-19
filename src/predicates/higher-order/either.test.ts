import { Predicate } from '../../types'
import { expect, TestCase } from '../../test-setup'
import { string, number } from '../../main'
import { either } from './either'

describe('predicates/higher-order/either', function () {
    describe('either(string, number)', function () {
        const testCases: TestCase[] = [
            {
                description: 'null',
                input: null,
                expected: false,
            },
            {
                description: 'undefined',
                input: undefined,
                expected: false,
            },
            {
                description: '() => {}',
                input: () => {},
                expected: false,
            },
            {
                description: '[]',
                input: [],
                expected: false,
            },
            {
                description: 'NaN',
                input: NaN,
                expected: false,
            },
            {
                description: '""',
                input: '',
                expected: true,
            },
            {
                description: '"1337"',
                input: '1337',
                expected: true,
            },
            {
                description: '42',
                input: 42,
                expected: true,
            },
        ]
        testCases.forEach(({ description, input, expected}) => {
            it(`either(string, number)(${description}) => ${expected}`, function () {
                const result: boolean = either(string, number)(input)
    
                expect(result).to.equal(expected)
            })
        })
    })
})
