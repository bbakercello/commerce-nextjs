import React from "react";
import Main from './images/Main'
import Image from "next/image";
import { mainModule } from "process";
const MainItems = () => {
  return (
    <div className="flex flex-col justify-center bg-neutral-200">
      <h1 className="flex justify-center text-slate-900">REWRITING THE CLASSICS</h1>
      <h4 className="flex justify-center text-slate-900">Stay Classic. Stay Cool.</h4>
      {Main.map(function (element) {
        return (
          <div className="flex justify-center p-4 relative">
            <Image
              src={element.link}
              object-fit="contain"
              width="300"
              height="300"
            />
            <div className="absolute text-neutral-600 flex flex-col inset-y-1/2 ">
              {element.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainItems;
