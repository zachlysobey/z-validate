import { expect } from '../test-setup'

import { number } from './number'

describe('predicates/number', function () {
    const testCases = [
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
            description: '""',
            input: '',
            expected: false,
        },
        {
            description: 'NaN',
            input: NaN,
            expected: false,
        },
        {
            description: '"1337"',
            input: '1337',
            expected: false,
        },
        {
            description: '42',
            input: 42,
            expected: true,
        },
    ]
    testCases.forEach(({ description, input, expected}) => {
        it(`number(${description}) => ${expected}`, function () {
            const result = number(input)

            expect(result).to.equal(expected)
        })
    })
})
