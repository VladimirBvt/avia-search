import { FlightCardSegment } from "../flight-card-segment/flight-card-segment";
import { FlightCardHeader } from "../flight-card-header/flight-card-header";

export const FlightCard = () => {
  return (
    <div className="flight-card">
      <FlightCardHeader />
      <div className="flight-card__segments-list">
        <FlightCardSegment />
        <div className="border-separator"></div>
        <FlightCardSegment />
      </div>
      <button className="button-select">Выбрать</button>
    </div>
  );
};
