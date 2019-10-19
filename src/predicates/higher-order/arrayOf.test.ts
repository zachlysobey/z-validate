import { expect, TestCase } from '../../test-setup'
import { string, number } from '../../main'
import { arrayOf } from './arrayOf'

describe('predicates/higher-order/arrayOf', function () {
    describe('title property', () => {
        it('arrayOf(string)', function () {
            arrayOf(string).should.haveOwnProperty('title').which.equals('arrayOf(string)')
            arrayOf(number).should.haveOwnProperty('title').which.equals('arrayOf(number)')
        })
        it('arrayOf(number)', function () {
            expect(arrayOf(number)).to.haveOwnProperty('title').which.equals('arrayOf(number)')
        })
    })
    describe('arrayOf(string)', () => {

    })
    buildTestsFor(
        'arrayOf(string)',
        () => arrayOf(string),
        [
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
                description: 'NaN',
                input: NaN,
                expected: false,
            },
            {
                description: '""',
                input: '',
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
                expected: false,
            },
            {
                description: '[]',
                input: [],
                expected: true,
            },
            {
                description: '[]',
                input: [],
                expected: true,
            },
            {
                description: '[]',
                input: [],
                expected: true,
            },
        ],
    )
})

function buildTestsFor<T>(unitUnderTestDescription: string, buildUnitUnderTest: () => T, testCases: TestCase[]) {
    describe(unitUnderTestDescription, function () {
        let unitUnderTest: T

        beforeEach('build the unit under test', function (){
            unitUnderTest = buildUnitUnderTest()
        })

        testCases.forEach(({ description, input, expected}) => {
            it(`${unitUnderTestDescription}(${description}) => ${expected}`, function () {
                const result: boolean = arrayOf(string)(input)

                expect(result).to.equal(expected)
            })
        })
    })
}