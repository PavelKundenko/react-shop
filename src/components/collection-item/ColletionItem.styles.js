import styled from 'styled-components';
import CustomButton from "../custom-button/CustomButton";

export const Image = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: .1s all;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionButton = styled(CustomButton)`
  display: none;
  width: 80%;
  opacity: .7;
  position: absolute;
  top: 255px;
  transition: .1s all;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover ${CollectionButton} {
    opacity: .85;
    display: flex;
  }
  &:hover ${Image} {
    opacity: .8;
  }
`;
