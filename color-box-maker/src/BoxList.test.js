import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);
    const input = getByLabelText("Background Color");
    const btn = queryByText("Add Box");
    expect(queryByTestId("green 100 100")).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: "green" } });
    fireEvent.click(btn);
    expect(queryByTestId("green 100 100")).toBeInTheDocument();
});

it("should delete box", function () {
    const { queryByTestId } = render(<BoxList />);
    const btn = queryByTestId("red 300 200 X");
    expect(queryByTestId("red 300 200")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(queryByTestId("red 300 200")).not.toBeInTheDocument();
});
