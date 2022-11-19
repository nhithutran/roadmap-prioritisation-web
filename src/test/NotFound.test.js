import React from "react"
import NotFound from '../Components/NotFound';
import {render, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<NotFound />))

afterEach(cleanup)

describe("NotFound", () => {
    test('display page not found message', () => {
        expect(comp.queryByText(/looking for cannot be/i)).toBeTruthy();
    }); 
});