import "./PriceSearch.css";

const PriceSearch = () => {
  return (
    <div className="ant-designhome-filled-parent">
      <img
        className="ant-designhome-filled-icon"
        alt=""
        src="/antdesignhomefilled.svg"
      />
      <div className="rectangle-div" />
      <div className="search-the-price">
        Search the price you are looking for here
      </div>
      <div className="location-parent">
        <div className="location">Location</div>
        <div className="akar-iconslocation" />
        <img className="group-icon1" alt="" src="/group.svg" />
      </div>
      <div className="type-parent">
        <div className="location">Type</div>
        <img className="vector-icon5" alt="" src="/vector1.svg" />
      </div>
      <div className="price-parent">
        <div className="location">Price</div>
        <img
          className="emojione-monotoneletter-s-icon"
          alt=""
          src="/emojionemonotoneletters.svg"
        />
      </div>
      <div>
        <div className="location">Search Now</div>
      </div>
    </div>
  );
};

export default PriceSearch;
