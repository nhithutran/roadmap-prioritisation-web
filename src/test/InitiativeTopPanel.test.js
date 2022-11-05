const { InitiativeTopPanel } = require('../components/InitiativeTopPanel')

describe("InitiativeTopPanel", () => {
    test('there is a heading', () => {
        expect('Initiative').toMatch(/tia/);    
    }); 
    
    test('to display correct text', () => {
        expect('When we succeed, we succeed because of our').toContain("we succeed because");    
        expect('Barack Obama').toContain("Obama");
    });  
});