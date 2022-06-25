import "./result-search-page.css";
import {FiltersSection} from "../../components/filters-section/filters-section";
import {ResultsSection} from "../../components/results-section/results-section";

export const ResultSearchPage = () => {
  return <div className="search-page">
    <FiltersSection className="filters-section"/>
    <ResultsSection className="results-section"/>
  </div>;
};
