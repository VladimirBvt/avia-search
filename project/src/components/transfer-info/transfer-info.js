export const TransferInfo = (props) => {
  const renderStops =
    props.stops > 0 ? (
      <>
        <span className="border-dark-gray"></span>
        <span className="flight-card__segment-transfer-text">
          {props.stops} пересадка
        </span>
        <span className="border-dark-gray"></span>
      </>
    ) : (
      <div className="flight-card__segment-without-transfer"></div>
    );
  return <>{renderStops}</>;
};
