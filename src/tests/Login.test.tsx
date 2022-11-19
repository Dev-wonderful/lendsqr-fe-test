// import React from "react";
import { render, screen } from '@testing-library/react'
import Login from "../pages/login";

test('Renders a form', () => {
    render(<Login />);
    const welcomeImage = screen.getAllByRole('img')
    expect(welcomeImage).toBeTruthy()
    const form = screen.getByText('Welcome!')
    expect(form).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
})