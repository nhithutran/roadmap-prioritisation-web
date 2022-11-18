import React from 'react';
import InitiativePage from '../components/InitiativePage'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
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
        // expect(comp.queryAllByText(/Estimation/i).length).toBe(1);
    }); 
});    

// Add test for Add to Estiamtion button and search bar function???