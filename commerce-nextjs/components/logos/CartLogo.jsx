import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartLogo = () => {
  return (
    <div className="text-slate-600">
      <FontAwesomeIcon className="text-slate-600" icon={faCartShopping} />
    </div>
  );
};

export default CartLogo;
