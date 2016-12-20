import React from 'react';


import LeftCategorySection from '../product-categories/LeftColumnCategory';

class CategoryPage extends React.Component {

  render(){

    return(
      <div id="pageContent">
        <div className="container">
          <div className="row">
          <LeftCategorySection/>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
