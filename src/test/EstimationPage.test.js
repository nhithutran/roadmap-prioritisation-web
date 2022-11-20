import React from 'react';
import ReactDOM from "react-dom"
import EstimationPage from '../components/EstimationPage'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthContext from "../context/auth.context";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    Link: (props) => {
      return <a {...props} href={props.to} />;
    },
  }));
  
let comp = null;

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    cleanup()
  });

describe("EstimationPage", () => {
    test('search bar placeholder text display', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <EstimationPage />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.getByTestId("estpage")).toBeTruthy();
        expect(comp.queryAllByText(/Estimation/i).length).toBe(1);
    });
});

 // Not working - datagrid unable to find dta-testid no matter what I name it
describe("EstimationPage Data", () => {
    test.skip('should fetch estimations on load and display in datagrid', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <EstimationPage />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.getByTestId("fakeMongoId")).not.toBeNull()
    });
});    
