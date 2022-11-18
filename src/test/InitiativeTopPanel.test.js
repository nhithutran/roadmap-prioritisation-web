import React from "react"
import InitiativeTopPanel from '../Components/InitiativeTopPanel';
import {render, fireEvent, screen, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<InitiativeTopPanel />))

afterEach(cleanup)

describe("InitiativeTopPanel", () => {

    test('should display initiative multiple times', () => {
        expect(comp.queryAllByText(/Initiative/i)).toBeTruthy();
        expect(comp.queryAllByText(/Initiative/i).length).toBe(2);
    }); 
    
    test('to display correct text', () => {
        expect(comp.queryByText(/we succeed because/i)).toBeTruthy();
    });  
});