import React from "react";
import { act } from 'react-dom/test-utils';
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import AuthContext from "../context/auth.context";
import { BrowserRouter } from "react-router-dom";

import InitiativeItemComponent from "../Components/InitiativeItem/IntiativeItem.component"
import axios from "axios";

jest.spyOn(axios, 'get').mockReturnValue(
    Promise.resolve({
        data: { data: { _id: "fakeMongoId", ticket_id:"blah", description: "fakedescription"} }
    })
);

let comp = null;

describe("InitiativeItemComponent", () => {
    test('should fetch and display data', async () => {
        await act(async () => {
            comp = await render(<AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
                <InitiativeItemComponent />
            </AuthContext.Provider>, {wrapper: BrowserRouter})
        })
        expect(comp.queryAllByText("fakedescription")).not.toBeNull()
    });

}); 
    