import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import {CollectionPreviewStyled, Preview, Title} from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyled>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {
        items
          .filter((item, index) => index < 4)
          .map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))
      }
    </Preview>
  </CollectionPreviewStyled>
);

export default CollectionPreview;

