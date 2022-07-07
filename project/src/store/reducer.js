import { getFlights } from "../mocks/mock";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { showMore } from "./action";
import { SORT } from "../consts";

const initialState = {
  flights: getFlights(),
  flightsForRender: [],
  sort: SORT.ASCENDING_PRICE,
  filter: "",
  filter_price: {
    min: "",
    max: "",
  },
  filter_airline: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(showMore, (state) => {
    return state;
  });
});

export const store = configureStore({ reducer });
