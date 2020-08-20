import React from "react";
import "./reset.css";
import "./styles.css";
import LiveCardItem from './LiveCardItem';
import NavItem from './NavItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavToggle: false,
      topGameList: []
    };
  }

  componentDidMount() {
    const topGameUrl = "https://api.twitch.tv/kraken/games/top?limit=5";
    fetch(topGameUrl)
    .then((response) => response.json())
    .then((response)=> {
      const { top } = response;
      console.log('top', top);
      
  }

  handleToggleNavList = () => {
    this.setState({
      isNavToggle: !this.state.isNavToggle,
    });
  }
  
  render() {
    const {isNavToggle} = this.state;
    const navListShow = isNavToggle ? 'show' : '';
    const navIconClose = isNavToggle ? 'close': '';
    return (
      <React.Fragment>
        <nav>
          <div className="nav-switch">
            <div className="logo">Twitch Top Games</div>
            <div className="nav-toggle" onClick={this.handleToggleNavList}>
              <div className={`normal-icon ${navIconClose}`}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
              </div>
            </div>
          </div>
          <ul className={`nav-list ${navListShow}`}></ul>
        </nav>
        <section className="live">
          <h1 className="live-title">請先點選上方遊戲</h1>
          <h2 className="live-subtitle">
            Top 20 popular live streams sorted by current viewers
          </h2>
          <div className="live-card__group"></div>
        </section>
      </React.Fragment>
    );
  }
}
