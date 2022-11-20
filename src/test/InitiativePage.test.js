import React from 'react';
import InitiativePage from '../components/InitiativePage'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthContext from "../context/auth.context";
import * as Api from "../config/api"
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";

jest.spyOn(Api, 'fetchInitiatives').mockReturnValue(
    Promise.resolve([
        { _id: "fakeMongoId", ticket_id:"blah"}
    ])
);
jest.mock('react-router-dom', () => ({
    Link: (props) => {
      return <a {...props} href={props.to} />;
    },
  }));
  
let comp = null;

afterEach(cleanup)

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

    test('should fetch initatives on load and display data', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <InitiativePage />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.getByTestId("fakeMongoId")).not.toBeNull()
    });
});     

    // test('initiatives table should have 6 columns', () => {
    //     const linkE
    //     expect(comp.getByTestId("gridtable")).length).toEqual(6);
    // });      