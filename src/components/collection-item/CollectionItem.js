import React from "react";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cart.actions";
import { CollectionItemContainer, Image, CollectionFooter, CollectionButton, Name, Price } from "./ColletionItem.styles"

const CollectionItem = ({item, addItem}) => {

  const {id, name, price, imageUrl } = item;

  return (
    <CollectionItemContainer className='collection-item' key={id}>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CollectionButton onClick={() => addItem(item)} inverted>Add to Cart</CollectionButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
