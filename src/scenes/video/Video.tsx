import React from "react";

function Video() {
  return (
    <div className="mt-40 flex items-center justify-center px-8">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HMThgdjSUpE?si=OfKEbhrSqu9rapKr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
