// const { InitiativeTopPanel } = require('../components/InitiativeTopPanel');
import { InitiativeTopPanel } from '../Components/InitiativeTopPanel';
import {render, fireEvent, screen} from '@testing-library/react'



describe("InitiativeTopPanel", () => {
    test('loads items eventually', async () => {
        render(<InitiativeTopPanel />)
    });    

    test('there is a heading', () => {
        expect('Initiative').toMatch(/tia/);    
    }); 
    
    test('to display correct text', () => {
        expect('When we succeed, we succeed because of our').toContain("we succeed because");    
        expect('Barack Obama').toContain("Obama");
    });  
});