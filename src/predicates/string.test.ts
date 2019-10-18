import { expect } from '../test-setup'

import { string } from './string'

describe('predicates/string', function () {
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
            description: '3',
            input: 3,
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
            description: '"123"',
            input: '123',
            expected: true,
        },
        {
            description: '"   "',
            input: '   ',
            expected: true,
        },
    ]
    testCases.forEach(({ description, input, expected}) => {
        it(`string(${description}) => ${expected}`, function () {
            const result = string(input)

            expect(result).to.equal(expected)
        })
    })
})
