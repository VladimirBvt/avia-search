import "./filters-section.css";
import { useDispatch, useSelector } from "react-redux";
import { v1 } from "uuid";
import { addFilterAirlines, deleteFilterAirlines } from "../../store/action";
import { useEffect } from "react";

export const FiltersSection = () => {
  const flights = useSelector((state) => state.flightsForRender);
  const airlines = useSelector((state) => state.airlines);
  const filterAirlines = useSelector((state) => state.filterAirlines);
  const disabledAirlines = useSelector((state) => state.disabledAirlines);
  const dispatch = useDispatch();

  /*const filterByCompanyName = (nameAirline) => {
    if (filterAirlines.some((a) => a === nameAirline)) {
      dispatch(
        addFilterAirlines,
        filterAirlines.filter((a) => a !== nameAirline)
      );
    }
  };*/

  /*const filterByCompanyNameHandler = (airLine) => {
    if (airlines.some((a) => a === airLine)) {
      setAirlines(airlines.filter((a) => a !== airLine));
    } else {
      setAirlines([...airlines, airLine]);
    }
  };*/

  useEffect(() => {
    console.log(filterAirlines);
  }, [filterAirlines]);

  const airlinesFilters = airlines.map((airline) => {
    const id = v1();
    return (
      <div key={id}>
        <input
          type="checkbox"
          id={id}
          value={airline}
          checked={filterAirlines.includes(airline)}
          /*disabled={disabledAirlines.includes(airline)}*/
          onChange={(event) => {
            if (event.target.checked) {
              dispatch(addFilterAirlines(airline));
              console.log(event.target.checked);
            } else {
              dispatch(deleteFilterAirlines(airline));
              console.log(event.target.checked);
            }
          }}
        />
        <label htmlFor={id}> - {airline}</label>
        <span className="min-price"> от PRICE р.</span>
      </div>
    );
  });

  return (
    <section className="filters-section">
      <div className="filters-section__head"> </div>
      <div className="filters-section__main">
        <div>
          <h3 className="filters-section__title">Сортировать</h3>
          <div>
            <input
              type="radio"
              id="ascending-price"
              name="sorting"
              defaultChecked
              defaultValue="ascending-price"
            />
            <label htmlFor="ascending-price"> - по возрастанию цены</label>
          </div>
          <div>
            <input
              type="radio"
              id="descending-price"
              name="sorting"
              defaultValue="descending-price"
            />
            <label htmlFor="descending-price"> - по убыванию цены</label>
          </div>
          <div>
            <input
              type="radio"
              id="travel-time"
              name="sorting"
              defaultValue="travel-time"
            />
            <label htmlFor="travel-time"> - по времени в пути</label>
          </div>
        </div>
        <div className="filters-section__filter">
          <h3 className="filters-section__title">Фильтровать</h3>
          <div>
            <input type="checkbox" id="one-stop" defaultValue="one-stop" />
            <label htmlFor="one-stop"> - 1 пересадка</label>
          </div>
          <div>
            <input type="checkbox" id="non-stop" defaultValue="non-stop" />
            <label htmlFor="non-stop"> - без пересадок</label>
          </div>
        </div>
        <div className="filters-section__price">
          <h3 className="filters-section__title">Цена</h3>
          <div>
            <label htmlFor="from-price">От </label>
            <input type="number" id="from-price" defaultValue="from-price" />
          </div>
          <div className="filters-section__price-wrap">
            <label htmlFor="up-to-price">До </label>
            <input type="number" id="up-to-price" defaultValue="up-to-price" />
          </div>
        </div>
        <div className="filters-section__company">
          <h3 className="filters-section__title">Авиакомпании</h3>

          <div>
            <input type="checkbox" id="one-change" value="one-change" />
            <label htmlFor="one-change"> - Имя авиакомпании</label>
            <span className="min-price"> от PRICE р.</span>
          </div>
          {airlinesFilters}
        </div>
      </div>
      <div className="filters-section__foot"> </div>
    </section>
  );
};
