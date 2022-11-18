import React from "react"
import EstimationTopPanel from '../Components/EstimationTopPanel';
import {render, fireEvent, screen, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<EstimationTopPanel />))

afterEach(cleanup)

describe("EstimationTopPanel", () => {

    test('should display initiative multiple times', () => {
        expect(comp.queryAllByText(/Estimation/i)).toBeTruthy();
        expect(comp.queryAllByText(/Estimation/i).length).toBe(1);
    }); 
    
    test('to display correct text', () => {
        expect(comp.queryByText(/to prioritize what/i)).toBeTruthy();
         
    });  
});
