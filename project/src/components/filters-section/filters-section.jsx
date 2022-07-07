import "./filters-section.css";

export const FiltersSection = () => {
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
          <h3 className="filters-section__title">Авиакомпания</h3>
          <div>
            <input type="checkbox" id="one-change" value="one-change" />
            <label htmlFor="one-stop"> - Имя авиакомпании</label>
            <span className="min-price"> от PRICE</span>
          </div>
        </div>
      </div>
      <div className="filters-section__foot"> </div>
    </section>
  );
};
