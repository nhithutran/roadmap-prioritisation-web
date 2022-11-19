import React from 'react';
import InitiativePage from '../components/InitiativePage'

code .AuthContextimport {render, fireEvent, screen, cleanup} from '@testing-library/react'
import AuthContext from "../context/auth.context";

let comp = null;
beforeEach(() => {
    comp = render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
        <InitiativePage />
    </AuthContext.Provider>)
})

afterEach(cleanup)

describe("InitiativePage", () => {
    test('search bar placeholder text display', () => {
        expect(comp.getByTestId("initpage")).toBeTruthy();
        expect(comp.queryAllByText(/Initiative/i).length).toBe(3);
    });
});     

    // test('initiatives table should have 6 columns', () => {
    //     const linkE
    //     expect(comp.getByTestId("gridtable")).length).toEqual(6);
    // });      