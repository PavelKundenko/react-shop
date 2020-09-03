import React from "react";
import { withRouter } from "react-router-dom";
import {BackgroundImageContainer, Content, MenuItemStyled, Subtitle, Title} from "./MenuItem.styles";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
  <MenuItemStyled onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <Content>
      <Title>{title}</Title>
      <Subtitle>Shop now</Subtitle>
    </Content>
  </MenuItemStyled>
);

export default withRouter(MenuItem);
