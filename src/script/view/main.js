import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
  const searchElement = document.querySelector("search-bar");
  // const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("club-List");

  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult)
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;