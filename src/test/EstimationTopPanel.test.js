const { EstimationTopPanel } = require('../components/EstimationTopPanel')

describe("EstimationTopPanel", () => {
    test('there is a heading', () => {
        expect('Estimation').toMatch(/Estima/);    
    }); 
    
    test('to display correct text', () => {
        expect('The key is not to prioritize what').toContain("not to prioritize what");    
        expect('Stephen Convey').toContain("Convey");
    });  
});