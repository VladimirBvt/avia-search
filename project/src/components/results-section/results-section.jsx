import "./results-section.css";
import { FlightCard } from "../flight-card/flight-card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NUMBER_OF_ITEMS, NUMBER_SHOW_MORE } from "../../const";
import { v1 } from "uuid";

export const ResultsSection = () => {
  const dataSelector = useSelector((state) => state.flightsForRender);
  const [numberOfItems, setNumberOfItems] = useState(NUMBER_OF_ITEMS);

  return (
    <>
      <section className="results-section">
        <div className="flight-card-list">
          {dataSelector.slice(0, numberOfItems).map((flight) => (
            <FlightCard flight={flight} key={v1()} />
          ))}

          <div className="button-wrapper">
            <button
              className="button-show-more"
              onClick={() => {
                setNumberOfItems((state) => state + NUMBER_SHOW_MORE);
              }}
            >
              Показать еще
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
