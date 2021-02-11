import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Item = styled.div`
  min-width: 30%;
  height: ${({size}) => size ? '380px' : ' 240px;'};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & .card-background {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .card-background {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    position: absolute;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;

    .title {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <Item size={size} imageUrl={imageUrl} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='card-background'/>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
  </Item>
);

export default withRouter(MenuItem); // withRouter dá acesso às propriedades de rotas, nesse caso o "history" que é chamado por prop vem de withRouter e assim é possível definir uma rota ao componente MenuItem