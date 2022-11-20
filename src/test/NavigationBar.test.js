import React from "react"
import NavigationBar from '../Components/NavigationBar';
import {render, cleanup} from '@testing-library/react'

let comp = null;
beforeEach(() => comp = render(<NavigationBar />))

afterEach(cleanup)

describe.skip("NavigationBar", () => {
    test('should display correct links', () => {
    expect(comp.queryAllByText("Initiative")).toBeTruthy();  
    }); 
});