import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/direcrory.selectors";

import MenuItem from "../menu-item/MenuItem";
import {DirectoryMenu} from "./Directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenu>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
    }
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
