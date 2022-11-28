import React from "react";

const LinkList = () => {
  let links = [
    { name: "Best Sellers", link: "../pages/best-sellers" },
    { name: "Holiday Gift Guide", link: "../pages/holiday-gift-guide" },
    { name: "New Arrivals", link: "../pages/new-arrivals" },
  ];
  return (
    <ul className="text-slate-500 flex pt-4">
      {links.map(function(element){
        return(
            <li>{element.name}</li>
        )
      })}
    </ul>
  );
};

export default LinkList;
