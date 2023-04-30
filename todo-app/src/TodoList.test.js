import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
    const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);
    const input = getByLabelText("Todo Item");
    const btn = queryByText("Add Todo");
    expect(queryByText("cook dinner")).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: "cook dinner" } });
    fireEvent.click(btn);
    expect(queryByText("cook dinner")).toBeInTheDocument();
});

it("should delete todo", function () {
    const { queryByTestId } = render(<TodoList />);
    const btn = queryByTestId("mow yard");
    expect(queryByTestId("mow yard")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(queryByTestId("mow yard")).not.toBeInTheDocument();
});
