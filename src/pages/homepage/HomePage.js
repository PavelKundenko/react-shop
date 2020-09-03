import React from "react";
import Directory from "../../components/directory/Directory";
import './HomePage.styles.scss';
import './Homepage.styles';
import {HomePageContainer} from "./Homepage.styles";

const HomePage = ({history}) => (
  <HomePageContainer>
    <Directory history={history}/>
  </HomePageContainer>
);

export default HomePage;
