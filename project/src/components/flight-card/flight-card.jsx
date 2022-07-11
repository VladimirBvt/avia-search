import { FlightCardSegment } from "../flight-card-segment/flight-card-segment";
import { FlightCardHeader } from "../flight-card-header/flight-card-header";
import { FlightCardSegmentSecondary } from "../flight-card-segment-secondary/flight-card-segment-secondary";

export const FlightCard = ({ flight }) => {
  //console.log(flight);
  if (!flight.routes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flight-card">
      <FlightCardHeader price={flight.price} />
      <div className="flight-card__segments-list">
        <FlightCardSegment segment={flight.routes[0]} />
        <div className="border-separator"></div>
        <FlightCardSegmentSecondary segment={flight.routes[1]} />
      </div>
      <button className="button-select">Выбрать</button>
    </div>
  );
};
