import React from "react";

function Video({ url }: { url?: string }) {
  return (
    <div className="py-[3vh]">
      <iframe
        src={`${url}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="515"
      />
    </div>
  );
}

export default Video;
