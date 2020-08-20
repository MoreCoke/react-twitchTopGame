import React from "react";
import "./styles.css";
import "./reset.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <div class="nav-switch">
            <div class="logo">Twitch Top Games</div>
            <div class="nav-toggle">
              <div class="normal-icon">
                <div class="line top"></div>
                <div class="line middle"></div>
                <div class="line bottom"></div>
              </div>
            </div>
          </div>
          <ul class="nav-list"></ul>
        </nav>
        <section class="live">
          <h1 class="live-title">請先點選上方遊戲</h1>
          <h2 class="live-subtitle">
            Top 20 popular live streams sorted by current viewers
          </h2>
          <div class="live-card__group"></div>
        </section>
      </React.Fragment>
    );
  }
}
