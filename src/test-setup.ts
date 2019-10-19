import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

export const expect = chai.expect
chai.should()

export interface TestCase<T = any, V = any> {
    description: string
    input: T
    expected: V
}
