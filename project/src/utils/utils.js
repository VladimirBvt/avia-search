export const generateStops = () => (Math.random() > 0.5 ? 1 : 0);

// сортировка по возрастанию цены
export const sortByPriceAscending = (flights) => {
  return [...flights].sort(
    (flight1, flight2) => +flight1.price - +flight2.price
  );
};

// сортировка по убыванию цены
export const sortByPriceDescending = (flights) => {
  return [...flights].sort(
    (flight1, flight2) => +flight2.price - +flight1.price
  );
};

// продолжительность полета
export const getFlightDuration = (flight) =>
  flight.routes.reduce((acc, current) => acc + current.duration, 0);

// нормализация формата продолжительности полета
export const formatDuration = (duration) => {
  let result = [];
  let days = Math.floor(duration / (60 * 24));
  let hours = Math.floor(duration / 60 - days * 24);
  let minutes = Math.floor(duration - days * 24 * 60 - hours * 60);
  days > 1 && result.push(`${days} д`);
  hours && result.push(`${hours} ч`);
  minutes && result.push(`${minutes} мин`);
  return result.join(" ");
};

// сортировка по времени в пути
export const sortByTravelTime = (flights) => {
  return [...flights].sort(
    (flight1, flight2) =>
      getFlightDuration(flight1) - getFlightDuration(flight2)
  );
};

export const getFormattedDate = (date) => {
  return `${date.getDate()} ${Intl.DateTimeFormat("ru", {
    month: "short",
  }).format(date)} ${Intl.DateTimeFormat("ru", { weekday: "short" }).format(
    date
  )}`;
};

export const addZero = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const getFormattedTime = (date) => {
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
};

export const getDataAdaptation = (segment) => {
  return {
    departureCity: segment.arrivalCity.caption,
    departureAirportUid: segment.arrivalAirport.uid,
    arrivalCity: segment.departureCity.caption,
    arrivalAirport: segment.departureAirport.caption,
    arrivalAirportUid: segment.departureAirport.uid,
  };
};

export const getAirlinesNames = (flights) => {
  let names = [];
  flights.map(
    (flight) =>
      !names.includes(flight.flightCaption) && names.push(flight.flightCaption)
  );
  return names;
};
