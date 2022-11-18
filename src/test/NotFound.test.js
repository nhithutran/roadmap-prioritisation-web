const { NotFound } = require('../components/NotFound')

describe("NotFound", () => {
    test('display page heading', () => {
        expect('NotFound').toContain("NotFound");  
    }); 

    test('to display correct wording', () => {
        expect('Sorry! The page you’re looking for cannot be found').toContain("cannot be found");    
    });  
});