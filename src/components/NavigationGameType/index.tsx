import {ReactElement} from 'react';

import PlayButton from '../../assets/images/playButton.svg';
import {GameType} from './styles';

export function NavigationGameType(): ReactElement {
  return (
    <ul>
      <GameType className="button-play-wrapper">
        <img src={PlayButton} alt="Play" className="play-button-shape" />

        <span>Play</span>
      </GameType>
      <GameType className="navigation active">
        <a href="/">Home</a>
      </GameType>
      <GameType className="navigation">
        <a href="/">TFT</a>
      </GameType>
      <GameType className="navigation">
        <a href="/">Clash</a>
      </GameType>
    </ul>
  );
}
