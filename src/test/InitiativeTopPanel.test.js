import React from "react"
import InitiativeTopPanel from '../Components/InitiativeTopPanel';
import {render, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<InitiativeTopPanel />))

afterEach(cleanup)

describe("InitiativeTopPanel", () => {

    test('should display Initiative multiple times', () => {
        expect(comp.queryAllByText("Initiative")).toBeTruthy();
        expect(comp.queryAllByText("Initiative").length).toBe(1);
    });     
    
    test('to display correct text', () => {
        expect(comp.queryByText(/we succeed because/i)).toBeTruthy();
         
    }); 
});