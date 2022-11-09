const { NoMatch } = require('../components/NoMatch')

describe("NoMatch", () => {
    test('display page heading', () => {
        expect('NoMatch').toContain("NoMatch");  
    }); 

    test('to display correct wording', () => {
        expect('Sorry! The page you’re looking for cannot be found').toContain("cannot be found");    
    });  
});