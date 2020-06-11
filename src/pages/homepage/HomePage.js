import React from "react";
import Directory from "../../components/directory/Directory";
import './HomePage.styles.scss';


const HomePage = ({history}) => (
  <div className='homepage'>
    <Directory history={history}/>
  </div>
);

export default HomePage;