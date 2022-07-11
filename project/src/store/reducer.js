import { configureStore, createReducer } from "@reduxjs/toolkit";
import { getData } from "./action";
import { SORT } from "../const";
import { getAirlinesNames } from "../utils/utils";

const initialState = {
  flights: [],
  flightsForRender: [],
  sort: SORT.ASCENDING_PRICE,
  filter_stop: "",
  filter_price: {
    min: "",
    max: "",
  },
  airlines: [],
  filter_airlines: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getData, (state, action) => {
    state.flights = action.payload;
    state.flightsForRender = action.payload;
    state.airlines = getAirlinesNames(action.payload);
  });
});

export const store = configureStore({ reducer });
