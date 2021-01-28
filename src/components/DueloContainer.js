import styled from 'styled-components';

export const DueloContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    padding: 20px;
    color: #fff;
    width: 100%;

    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
  `;