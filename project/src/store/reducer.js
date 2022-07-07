import { flights } from "../mocks/mock";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { showMore } from "./action";

const initialState = {
  flights: flights,
  flightsX: [
    { title: "t1", time: "tm1" },
    { title: "t2", time: "tm2" },
    { title: "t3", time: "tm3" },
    { title: "t4", time: "tm4" },
    { title: "t5", time: "tm5" },
  ],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(showMore, (state) => {
    return state;
  });
});

export const store = configureStore({ reducer });
