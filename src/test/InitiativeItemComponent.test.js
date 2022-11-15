const { InitiativeItem } = require('../components/InitiativeItem/IntiativeItem.component')

describe("InitiativeItem", () => {
    test('there is a heading', () => {
        expect('Initiative').toMatch(/tiat/);    
    }); 
    
    test('the initiative has correct headername', () => {
        expect('Ticket').toContain('Ticket');
        expect('Initiative').toContain('Initiative');    
        expect('Description').toContain('Description');    
        expect('Submit Date').toContain('Submit Date');    
        expect('Owner').toContain('Owner');       
        }); 
    });        

describe("Initiative Item sub-heading", () => {
    test('corect sub-heading is displayed', () => {
        expect('Additional Information:').toMatch(/Add/);    
    }); 
            
    test('the initiative has correct headername', () => {
        expect('Impact').toContain('Impact');
        expect('Confidence').toContain('Confidence');    
        expect('Effort').toContain('Effort');    
        expect('ICE Score').toContain('ICE Score');    
        expect('Priority').toContain('Priority');
        expect('Target').toContain('Target'); 
        expect('Target Launch Date').toContain('Target Launch Date');
        });    
        
        // Display Button Clear and Save
});