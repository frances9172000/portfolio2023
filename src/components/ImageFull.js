import Image from "next/image";
import { useEffect, useState } from "react";
import Poster from "../../public/graphicdesigns/Poster.png";
export default function ImageFull({ currentImage,closeImage, onCloseImage }) {

  return (
    <div className={`${closeImage ? "hidden" : ""} fixed overflow-hidden h-full w-full bg-[var(--secondaryTranslucent)] dark:bg-[var(--primaryTranslucent)] z-50`}>
      <div>
      <button className="px-5 py-3 text-xl ml-auto block" onClick={() => onCloseImage()}>
        <i className="fa fa-close"></i>
      </button>
      </div>
      <div className="max-w-[500px] max-h-[90%] m-auto p-3 overflow-scroll remove-scrollbar">
        {currentImage ? (
          <Image
            src={currentImage}
            alt="Image"
            className="h-full object-contain"
          />
        ) : (
          ""
        )}
      </div>
      <div className="full-image-bg h-full w-full blur absolute top-0 -z-10"></div>
    </div>
  );
}
