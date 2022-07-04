import clock from "../../images/clock.png";

export const FlightCardSegment = () => {
  return (
    <div className="flight-card__segment">
      <div className="flight-card__segment-route">
        Москва, ШЕРЕМЕТЬЕВО{" "}
        <span className="flight-card__segment--color">(SVO)</span> -> ЛОНДОН,
        Лондон, Хитроу{" "}
        <span className="flight-card__segment--color">(LHR)</span>
      </div>
      <div className="border-gray"></div>
      <div className="flight-card__segment-time">
        <div>
          20:40{" "}
          <span className="flight-card__segment--color flight-card__segment--margin-left">
            18 авг. вт
          </span>{" "}
        </div>
        <div className="flight-card__segment-travel-time">
          <img src={clock} alt="clock" width="24" />
          <span className="flight-card__segment-travel-time-value">
            14 ч 45 мин
          </span>
        </div>
        <div className="flight-card__segment-time-arrival">
          <span className="flight-card__segment--color flight-card__route--margin-right">
            19 авг. ср
          </span>{" "}
          9:25
        </div>
      </div>
      <div className="flight-card__segment-transfer">
        <span className="border-dark-gray"></span>
        <span className="flight-card__segment-transfer-text">1 пересадка</span>
        <span className="border-dark-gray"></span>
        {/*<div className="flight-card__segment-without-transfer"></div>*/}
      </div>

      <div className="flight-card__segment-airline">
        Рейс выполняет: LOT Polish Airlines
      </div>
    </div>
  );
};
