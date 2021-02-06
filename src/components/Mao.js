import styled, { css } from 'styled-components';


export const Mao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
    
    button {
      width: 140px;
      height: 140px;
      padding: 20px;
      border-radius: 50%;
      z-index: 2;
      outline: none;
      cursor: pointer;
      ${({ mao }) => {
        if (mao === 'paper')
          return css`
            border: 1em solid hsl(39, 89%, 49%);
          `;
        if (mao === 'rock')
          return css`
            border: 1em solid hsl(230, 89%, 62%);
          `;
        if (mao === 'scissors')
          return css`
            border: 1em  solid hsl(349, 71%, 52%);
          `;
        if (mao === 'lizard')
          return css`
            border: 1em  solid  hsl(261, 72%, 63%);
          `;
        if (mao === 'spock')
          return css`
            border: 1em  solid hsl(189, 58%, 57%);
          `;
      }};
    }
    button > img{
      width: 50px;
      height: 50px;
    }
  `;