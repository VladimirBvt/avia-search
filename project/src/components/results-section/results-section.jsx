import "./results-section.css";
import { Logo } from "../logo/logo";
import { FlightCardSegment } from "../flight-card-segment/flight-card-segment";
import { FlightCard } from "../flight-card/flight-card";

export const ResultsSection = () => {
  return (
    <>
      <section className="results-section">
        <div className="flight-card-list">
          <FlightCard />
          <div className="button-wrapper">
            <button className="button-show-more">Показать еще</button>
          </div>
        </div>
      </section>
    </>
  );
};
