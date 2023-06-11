// e.stopPropagation(). https://stackoverflow.com/questions/38619981/how-can-i-prevent-event-bubbling-in-nested-react-components-on-click
// Disable text selection. https://stackoverflow.com/questions/10809995/css-disable-text-selection

import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar() {
  function searchHandler() {
    console.log('Clicked Search button!');
  }

  function closeQueryHandler(e) {
    e.stopPropagation();
    console.log('Clicked close icon!');
  }

  return (
    <>
      <form>
        <div className="searchbar-icon-container">
          <div
            className="inputfield-icon"
            title="Search"
            onClick={searchHandler}
          >
            <FaSearch
              title="Search"
              className="fa-search-icon"
            />
            <span className="close-icon" onClick={closeQueryHandler} title="Close query">
              &#10006;
            </span>
          </div>
          <input
            className="searchbar"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
}
