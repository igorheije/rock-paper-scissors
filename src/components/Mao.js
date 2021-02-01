import styled, { css } from 'styled-components';


export const Mao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    :nth-of-type(3) {
      grid-column: span 2;
    }
    img {
      width: 100%;
    }
    
    button {
      order:0;
      max-width: 250px;
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
      }};
    }
    button > img{
      width: 50px;
      height: 50px;
    }
  `;