import { expect } from './test-setup'

import * as mainExports from './main'

describe('main.ts', function () {
    const exportNames = Object.keys(mainExports)

    const expectedExportCount = 2
    it(`exports ${expectedExportCount} functions`, () => {
        expect(exportNames.length).to.equal(expectedExportCount)
        exportNames.forEach(name => {
            expect(mainExports).to.respondTo(name)
        })
    })

    const expectedFunctions = [
        'string',
        'number'
    ]
    it('exports expected functions', function () {
        expect(exportNames).to.deep.equal(expectedFunctions)
    })
})
