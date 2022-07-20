import { configureStore, createReducer } from "@reduxjs/toolkit";
import { getData, addFilterAirlines, deleteFilterAirlines } from "./action";
import { SORT } from "../const";
import { getAirlinesNames } from "../utils/utils";

const initialState = {
  flights: [],
  flightsForRender: [],
  sort: SORT.ASCENDING_PRICE,
  filterStop: [0, 1],
  filterPrice: {
    min: "",
    max: "",
  },
  airlines: [],
  filterAirlines: [],
  disabledAirlines: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getData, (state, action) => {
      state.flights = action.payload;
      state.flightsForRender = action.payload;
      state.airlines = getAirlinesNames(action.payload);
      //state.filterAirlines = getAirlinesNames(action.payload);
    })
    .addCase(addFilterAirlines, (state, action) => {
      state.filterAirlines = [...state.filterAirlines, action.payload];
    })
    .addCase(deleteFilterAirlines, (state, action) => {
      state.filterAirlines = state.filterAirlines.filter(
        (item) => item !== action.payload
      );
    });
});

export const store = configureStore({ reducer });
