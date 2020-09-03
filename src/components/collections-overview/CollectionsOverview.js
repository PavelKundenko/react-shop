import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview";
import {CollectionOverviewStyled} from "./CollectionOverview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewStyled>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
  </CollectionOverviewStyled>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
