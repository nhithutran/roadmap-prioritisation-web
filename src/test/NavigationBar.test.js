const { NavigationBar } = require('../components/NavigationBar')

describe("NavigationBar", () => {
    test('display brand', () => {
        expect('Canva').toMatch(/Canva/);    
    }); 
    
    test('to display correct links', () => {
        expect('Dashboard').toContain("Dashboard");    
        expect('Estimation').toContain("Estimation");
        expect('Log Out').toContain("Log Out");
    });  
});