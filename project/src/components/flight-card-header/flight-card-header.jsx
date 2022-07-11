import logo from "../../images/lot-edit.svg";

export const FlightCardHeader = ({ price }) => {
  return (
    <div className="flight-card__header">
      <div className="flight-card__header-logo">
        <img src={logo} alt="logo airline" width="120" />
      </div>
      <div className="flight-card__header-wrap">
        <div className="flight-card__header-price">{price} ₽</div>
        <div className="flight-card__header-description">
          Стоимость для одного взрослого пассажира
        </div>
      </div>
    </div>
  );
};
