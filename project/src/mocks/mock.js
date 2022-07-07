import data from "./flights.json";
import { v1 } from "uuid";
//import { generateStops } from "../utils/utils";

export const getFlights = () => {
  return data.result.flights.map((flight) => {
    const routes = flight.flight.legs.map((leg) => {
      const segment = leg.segments[0];
      return {
        key: v1(),
        airline: segment.airline,
        departureCity: segment.departureCity,
        departureAirport: segment.departureAirport,
        departureDate: segment.departureDate,
        arrivalCity: segment.arrivalCity,
        arrivalAirport: segment.arrivalAirport,
        arrivalDate: segment.arrivalDate,
        stops: segment.stops,
        duration: leg.duration,
      };
    });
    return {
      price: flight.flight.price.total.amount,
      flightCaption: flight.flight.carrier.caption,
      routes: routes,
      key: v1(),
    };
  });
};

console.log(getFlights());
