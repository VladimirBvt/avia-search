import "./results-section.css";
import { FlightCard } from "../flight-card/flight-card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { INDEX_OF_ELEMENT, NUMBER_OF_ITEMS } from "../../const";
import { v1 } from "uuid";

export const ResultsSection = () => {
  const dataSelector = useSelector((state) => state.flightsForRender);
  console.log(dataSelector);
  const [indexOfElement, setIndexOfElement] = useState(INDEX_OF_ELEMENT);
  /*for (let i = 10; i < dataSelector.length; i++) {
    dataSelector[i].style.display = "none";
  }*/

  return (
    <>
      <section className="results-section">
        <div className="flight-card-list">
          <FlightCard />

          {dataSelector.slice(0, indexOfElement).map((flight) => (
            <FlightCard flight={flight} key={v1()} />
          ))}

          <div className="button-wrapper">
            <button
              className="button-show-more"
              onClick={() => {
                setIndexOfElement((state) => state + NUMBER_OF_ITEMS);
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
