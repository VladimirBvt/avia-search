import "./app.css";
import "../../mocks/mock.js";
import { ResultSearchPage } from "../../pages/result-search-page/result-search-page";
import { useEffect } from "react";
import { getFlights } from "../../mocks/mock";
import { useDispatch } from "react-redux";
import { getData } from "../../store/action";
import { getAirlinesNames, sortByPriceAscending } from "../../utils/utils";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const flights = getFlights();
    const sortInitialFlights = sortByPriceAscending(flights);
    dispatch(getData(sortInitialFlights));
  }, []);

  return (
    <div className="App">
      <ResultSearchPage />
    </div>
  );
}

export default App;
