import React from "react";

function Card({ username, btnText = "visit me" ,infor,age,gender,imgSrc}) {
  //visit me is acting as a default value incase btnText is passed empty
  return (
    <div className="relative h-[400px] w-[300px] rounded-xl mb-4 overflow-hidden hover:scale-110 ease-in-out duration-300">
      <img
        src={imgSrc}
        alt="User Image"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username} {age}{gender}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {infor}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black hover:bg-black hover:text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
