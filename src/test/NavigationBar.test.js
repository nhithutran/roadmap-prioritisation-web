const { NavigationBar } = require('../components/NavigationBar')

describe("NavigationBar", () => {
    test('display brand', () => {
        expect('Canva').toMatch(/Canva/);    
    }); 
    
    test('to display correct links', () => {
        expect('Initiative').toContain("Initiative");    
        expect('Estimation').toContain("Estimation");
        expect('Users').toContain("Users");
    });  
});