const { Dashboard } = require('../Components/Dashboard')

describe("Dashboard", () => {
    test('there is a "Search" in search bar', () => {
        expect('Search').toMatch(/../);    
    });    

    test('the initiatives table has correct headername in it', () => {
    expect('Ticket#').toContain('Ticket#');    
    });

    test('the initiatives table has correct headername in it', () => {
    expect('Description').toContain('Description');    
    });

    test('the initiatives table has correct headername in it', () => {
    expect('Submit Date').toContain('Submit Date');    
    });

    test('the initiatives table has correct headername in it', () => {
    expect('Owner').toContain('Owner');    
    });

    test('the initiatives table has correct headername in it', () => {
    expect('I.C.E. score').toContain('I.C.E. score');    
    });
});    

// Add test for Add to Estiamtion button and search bar function???