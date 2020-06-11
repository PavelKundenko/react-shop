import React from "react";
import './CollectionPreview.styles.scss';
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((item, index) => index < 4).map(({id, ...otherItemProps}) => (
          <CollectionItem id={id} {...otherItemProps}/>
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;

