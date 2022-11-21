import React from "react";
import Login from "../Components/Authentication/Login.component";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AuthContext from "../context/auth.context";

let comp = null;
beforeEach(() => {
  comp = render(
    <React.StrictMode>
      <AuthContext.Provider value={{ auth: { token: "fake_token" } }}>
        <Login />
      </AuthContext.Provider>
    </React.StrictMode>,
    { wrapper: BrowserRouter }
  );
});

afterEach(cleanup);

describe("Login Page", () => {
  test("display welcome message", () => {
    expect(comp.queryByText(/Welcome/i)).toBeTruthy();
  });
  test("Login form fields display", () => {
    expect(comp.queryByText(/Email/i)).toBeTruthy();
  });
  test("Forget Password link display", () => {
    expect(comp.queryByText(/Forgot/i)).toBeTruthy();
  });

  it("for handling fields change", () => {
    const input = comp.getByPlaceholderText("Enter email address");
    fireEvent.change(input, { target: { value: "anthony@test.com" } });
    expect(input.value).toBe("anthony@test.com");
  });

  
});