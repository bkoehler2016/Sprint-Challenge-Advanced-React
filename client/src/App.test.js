import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import PlayerCard from "./Components/PlayerCard";
import PlayerList from "./Components/PlayerList";

it("renders without crashing", () => {
  const wrapped = rtl.render(<App />);
  const heading = wrapped.queryByText(/Womens World/i);
  const heading2 = wrapped.queryAllByText(/Searchs/i);
  expect(heading).toBeTruthy();
  expect(heading2).toBeTruthy();
  expect(heading).toBeVisible();
});
