import React from 'react';
import ReactDOM from "react-dom"
import InitiativePage from '../components/InitiativePage'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthContext from "../context/auth.context";
import * as Api from "../config/api"
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.spyOn(Api, 'fetchInitiatives').mockReturnValue(
    Promise.resolve([
        { _id: "fakeMongoId", ticket_id:"blah"}
    ])
);
const axiosSpy = jest.spyOn(axios, 'put');

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

describe("InitiativePage", () => {
    test('search bar placeholder text display', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <InitiativePage />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.getByTestId("initpage")).toBeTruthy();
        expect(comp.queryAllByText(/Initiative/i).length).toBe(3);
    });
});

describe("InitiativePage Data", () => {

    test('should fetch initatives on load and display in datagrid', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <InitiativePage />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.getByTestId("fakeMongoId")).not.toBeNull()
    });

    // Not working - button event not working
    test.skip('should send selected ids to backend and refetch', async () => {
        act(() => {
            ReactDOM.createRoot(container).render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
            <InitiativePage />
        </AuthContext.Provider>, {wrapper: BrowserRouter})
        })

        const button = container.querySelector("button")
        act(() => {
            button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
           expect(axiosSpy).toHaveBeenCalled();
        })

        // expect(axiosSpy).toHaveBeenCalledWith('http://localhost:4000/api/v1/estimations/createEstimation');
        // check spy2
    });
});     

    // test('initiatives table should have 6 columns', () => {
    //     const linkE
    //     expect(comp.getByTestId("gridtable")).length).toEqual(6);
    // });      