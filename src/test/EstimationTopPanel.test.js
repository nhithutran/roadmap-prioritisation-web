import React from "react"
import EstimationTopPanel from '../Components/EstimationTopPanel';
import {render, fireEvent, screen, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<EstimationTopPanel />))

afterEach(cleanup)

describe("EstimationTopPanel", () => {

    test('there is a heading', () => {
        expect(comp.queryByText(/Estimation/i)).toBeTruthy();
    }); 
    
    test('to display correct text', () => {
        expect(comp.queryByText(/to prioritize what/i)).toBeTruthy();
         
    });  

    it('should display correct text', () => {
        expect(comp.queryByText(/Convey/i)).toBeTruthy();
      });

});
