import React from 'react';

const LeftColumnSection = () => {

  return(

  <aside className="col-md-4 col-lg-3 col-xl-2" id="leftColumn">
    <a href="#" className="slide-column-close visible-sm visible-xs"><span className="icon icon-chevron_left" />back</a>
    <div className="filters-block visible-xs">
      <div className="filters-row__select">
        <label>Sort by: </label>
        <div className="select-wrapper">
          <select className="select--ys">
            <option>Position</option>
            <option>Price</option>
            <option>Rating</option>
          </select>
        </div>
        <a href="#" className="sort-direction icon icon-arrow_back" />
      </div>
      <div className="filters-row__select">
        <label>Show: </label>
        <div className="select-wrapper">
          <select className="select--ys">
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>
      <a href="#" className="icon icon-arrow-down active" /><a href="#" className="icon icon-arrow-up" />
    </div>
    {/* price slider block */}
    <div className="collapse-block open">
      <h4 className="collapse-block__title">PRICE</h4>
      <div className="collapse-block__content">
        <div id="priceSlider" className="price-slider" />
        <form action="#">
          <div className="price-input">
            <label>From:</label>
            <input type="text" id="priceMin" />
          </div>
          <div className="price-input-divider">-</div>
          <div className="price-input">
            <label>To:</label>
            <input type="text" id="priceMax" />
          </div>
          <div className="price-input">
            <button type="submit" className="btn btn--ys btn--md">Filter</button>
          </div>
        </form>
      </div>
    </div>
    {/* /price slider block */}
    {/* brands block */}
    <div className="collapse-block">
      <h4 className="collapse-block__title">BRANDS</h4>
      <div className="collapse-block__content">
        <ul className="simple-list">
          <li><a href="#">Levi’s </a></li>
          <li><a href="#">Gap</a></li>
          <li><a href="#">Zara</a></li>
          <li><a href="#">Polo</a></li>
          <li><a href="#">Ecco</a></li>
          <li><a href="#">H&amp;M</a></li>
          <li><a href="#">Diesel</a></li>
          <li><a href="#">Bockers</a></li>
          <li><a href="#">Lacoste</a></li>
        </ul>
      </div>
    </div>
    {/* /brands block */}
  </aside>

  )
};

export default LeftColumnSection;
