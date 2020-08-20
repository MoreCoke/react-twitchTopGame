import React from 'react';

export default function LiveCardItem({ stream }) {
  const {
    channel: { display_name, logo, status, url: twitchUrl },
    preview: { medium: gameBgc },
  } = stream;
  return (
    <a className="live-card__item" href={twitchUrl} target="_blank">
      <div
        className="live-card__img"
        style={{ backgroundImage: `url(${gameBgc})` }}
      ></div>
      <div className="live-card__content">
        <div
          className="live-card__avator"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="live-card__info">
          <div className="live-card__game">{status}</div>
          <div className="live-card__player">{display_name}</div>
        </div>
      </div>
    </a>
  );
}
