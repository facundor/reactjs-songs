import React, { Fragment } from "react";

function Song({ lyrics }) {

  if(lyrics.length === 0) return null;

  return (
    <Fragment>
      <h2>Song Lyric</h2>
      <p className="letra">{lyrics}</p>
    </Fragment>
  );
}

export default Song;
