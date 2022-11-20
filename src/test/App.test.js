import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import {render, cleanup} from '@testing-library/react'
import AuthContext from "../context/auth.context";

let comp = null;
beforeEach(() => {
    comp = render(<React.StrictMode>
      <AuthContext.Provider value={{auth:{ token: "fake_token"}}}>
        <App />
    </AuthContext.Provider></React.StrictMode>, {wrapper: BrowserRouter})
})

afterEach(cleanup)

describe.skip("App", () => {
  it("renders without crashing", () => {
  const div = document.createElement("div");
});

  test('there is a footer', () => {
      expect(queryByText(/Chung and Nhi/i)).toBeTruthy();
  });  
});

