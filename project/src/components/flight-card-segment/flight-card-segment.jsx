import clock from "../../images/clock.png";
import {
  getFormattedDate,
  getFormattedTime,
  formatDuration,
} from "../../utils/utils";
import { TransferInfo } from "../transfer-info/transfer-info";

export const FlightCardSegment = (props) => {
  return (
    <div className="flight-card__segment">
      <div className="flight-card__segment-route">
        {props.segment.departureCity.caption},{" "}
        {props.segment.departureAirport.caption}{" "}
        <span className="flight-card__segment--color">
          ({props.segment.departureAirport.uid})
        </span>{" "}
        &#8594;
        {props.segment.arrivalCity.caption ===
        props.segment.arrivalAirport.caption
          ? props.segment.arrivalCity.caption
          : `${props.segment.arrivalCity.caption} 
        ${props.segment.arrivalAirport.caption}`}{" "}
        <span className="flight-card__segment--color">
          ({props.segment.arrivalAirport.uid})
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
