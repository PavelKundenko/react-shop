import styled, { css } from 'styled-components';

const getSize = props => props.size === 'large' ? css`height: 380px` : '';

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  text-transform: uppercase;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemStyled = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  ${getSize}
  
  &:hover {
    cursor: pointer;
    ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${Content} {
      opacity: 0.9;
    }
  }
  
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;



