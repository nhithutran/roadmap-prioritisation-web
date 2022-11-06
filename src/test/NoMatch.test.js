const { NoMatch } = require('../components/NoMatch')

describe("NoMatch", () => {
    test('display page heading', () => {
        expect('NoMatch').toContain("NoMatch");  
    }); 
});