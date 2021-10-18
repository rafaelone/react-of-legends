import styled from 'styled-components';

export const GameType = styled.li`
  font-size: 14px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(150%);
    color: #f0e6d2;
    transition-duration: 0.2s;
  }

  &.button-play-wrapper {
    transform: scale(0.8) translateY(-7px);
    margin-right: -26px;

    span {
      text-transform: uppercase;
      color: #f0e6d2;
      font-weight: 700;
      letter-spacing: 1px;
      position: absolute;
      left: 130px;
      top: 38px;
      cursor: pointer;
    }
  }

  img {
    &.play-button-shape {
      margin: 0 2.2rem;
      position: relative;
      top: 20px;
    }
  }

  &.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: not-allowed;
    &.active,
    &:hover {
      background: linear-gradient(
        0deg,
        rgba(235, 235, 244, 0.1348914566),
        hsla(0, 0%, 100%, 0) 70%
      );

      /* cursor: pointer; */
      transition-duration: 0.2s;
    }

    &.active a {
      color: #beb088;
      opacity: 1;
      filter: grayscale(0%);
      cursor: pointer;
    }

    a {
      color: #f0e6d2;
      text-transform: uppercase;
      font-weight: 700;
      background: transparent;
      letter-spacing: 1px;
      padding: 44.5px 1.5rem;
      display: block;
      transition-duration: 0.2s;

      filter: grayscale(100%);
      opacity: 0.4;
      cursor: no-drop;
    }
  }
`;
