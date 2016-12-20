import React from 'react';
import {Link} from 'react-router';

import CategorySection from '../category-section/CategorySection';
import BannerSection from '../banners/BannerSection';
import FeatureProductSection from '../feature-product/FeatureProductSection';


class HomePage extends React.Component {
  render() {
    return (
      <div id="content">

       <CategorySection/>
        <FeatureProductSection/>
        <BannerSection/>


      </div>
    );
  }
}

export default HomePage;
