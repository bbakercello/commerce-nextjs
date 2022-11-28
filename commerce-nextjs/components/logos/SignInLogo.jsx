import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInLogo = () => {
  return (
    <div className="text-slate-600">
      <FontAwesomeIcon className="text-slate-600" icon={faUser} />
    </div>
  );
};

export default SignInLogo;
