import clock from "../../images/clock.png";
import {
  getFormattedDate,
  getFormattedTime,
  formatDuration,
  getDataAdaptation,
} from "../../utils/utils";
import { TransferInfo } from "../transfer-info/transfer-info";

export const FlightCardSegmentSecondary = (props) => {
  const {
    departureCity,
    departureAirport,
    departureAirportUid,
    arrivalCity,
    arrivalAirport,
    arrivalAirportUid,
  } = getDataAdaptation(props.segment);

  return (
    <div className="flight-card__segment">
      <div className="flight-card__segment-route">
        {departureCity === departureAirport
          ? departureCity
          : `${departureCity} 
        ${departureAirport}`}
        <span className="flight-card__segment--color">
          ({departureAirportUid})
        </span>{" "}
        &#8594; {arrivalCity} {arrivalAirport}
        <span className="flight-card__segment--color">
          ({arrivalAirportUid})
        </span>
      </div>
      <div className="border-gray"></div>
      <div className="flight-card__segment-time">
        <div>
          {getFormattedTime(new Date(props.segment.departureDate))}{" "}
          <span className="flight-card__segment--color flight-card__segment--margin-left">
            {getFormattedDate(new Date(props.segment.departureDate))}
          </span>{" "}
        </div>
        <div className="flight-card__segment-travel-time">
          <img src={clock} alt="clock" width="24" />
          <span className="flight-card__segment-travel-time-value">
            {formatDuration(props.segment.duration)}
          </span>
        </div>
        <div className="flight-card__segment-time-arrival">
          <span className="flight-card__segment--color flight-card__route--margin-right">
            {getFormattedDate(new Date(props.segment.arrivalDate))}
          </span>{" "}
          {getFormattedTime(new Date(props.segment.arrivalDate))}
        </div>
      </div>
      <div className="flight-card__segment-transfer">
        <TransferInfo stops={props.segment.stops} />
      </div>

      <div className="flight-card__segment-airline">
        Рейс выполняет: {props.segment.airline.caption}
      </div>
    </div>
  );
};
