import React from "react"
import InitiativeTopPanel from '../Components/InitiativeTopPanel';
import {render, fireEvent, screen, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<InitiativeTopPanel />))

afterEach(cleanup)

describe("InitiativeTopPanel", () => {

    test('there is a heading', () => {
        expect(comp.queryByText(/Initiative/i)).toBeTruthy();
    }); 
    
    test('to display correct text', () => {
        expect(comp.queryByText(/we succeed because/i)).toBeTruthy();
         
    });  

    it('should display correct text', () => {
        expect(comp.queryByText(/Obama/i)).toBeTruthy();
      });

});