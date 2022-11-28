import React from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchLogo = () => {
  return (
    <div className="text-slate-600">
      <FontAwesomeIcon className="text-slate-600" icon={faMagnifyingGlass} />
    </div>
  );
}

export default SearchLogo