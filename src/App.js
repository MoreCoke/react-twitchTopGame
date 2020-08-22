import React from 'react';
import './reset.css';
import './styles.css';
import LiveCardItem from './LiveCardItem';
import LiveCardItemEmpty from './LiveCardItemEmpty';
import NavItem from './NavItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavToggle: false,
      asyncTopGame: null,
      asyncGameList: null,
      currentGame: null,
    };
    this.header = {
      headers: {
        'Client-ID': 'bln1yehoadgj1i6k3l7vkccwp2s7ar',
        Accept: 'application/vnd.twitchtv.v5+json',
      },
    };
    this.url = {
      topGameUrl: 'https://api.twitch.tv/kraken/games/top?limit=5',
      gameListUrl: 'https://api.twitch.tv/kraken/streams/?limit=20&game=',
    };
  }

  componentDidMount() {
    const { topGameUrl } = this.url;
    fetch(topGameUrl, this.header)
      .then((response) => response.json())
      .then((response) => {
        const { top } = response;
        const arr = top.map((element) => element.game.name);
        this.setState({
          asyncTopGame: arr,
        });
    });
  }

  handleTwitchGameList = (game) => {
    let { gameListUrl } = this.url;
    gameListUrl += game;
    fetch(gameListUrl, this.header)
      .then((response) => response.json())
      .then((response) => {
        const { streams } = response;
        const arr = streams.map((element) => {
          const {
            channel: { display_name, logo, status, url: twitchUrl },
            preview: { medium: gameBgc }
          } = element;
          return {
            display_name,
            logo,
            status,
            twitchUrl,
            gameBgc
          }
        });
        this.setState({
          asyncGameList: arr,
          currentGame: game
        });
    });
  };

  handleToggleNavList = () => {
    this.setState({
      isNavToggle: !this.state.isNavToggle,
    });
  };

  render() {
    const { isNavToggle, asyncTopGame, asyncGameList, currentGame } = this.state;
    const navListShow = isNavToggle ? 'show' : '';
    const navIconClose = isNavToggle ? 'close' : '';
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
          <ul className={`nav-list ${navListShow}`}>
            {asyncTopGame &&
              asyncTopGame.map((element) => (
                <NavItem
                  key={element}
                  currentName={currentGame}
                  name={element}
                  handleTwitchGameList={this.handleTwitchGameList}
                />
              ))}
          </ul>
        </nav>
        <section className="live">
          <h1 className="live-title">請先點選上方遊戲</h1>
          <h2 className="live-subtitle">
            Top 20 popular live streams sorted by current viewers
          </h2>
          <div className="live-card__group">
            {asyncGameList && asyncGameList.map(element => (
              <LiveCardItem key={element.display_name} stream={element}/>
            ))}
            {
              [...Array(4)].map((element, index) => <LiveCardItemEmpty key={index}/>)
            }
          </div>
        </section>
      </React.Fragment>
    );
  }
}
