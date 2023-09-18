import "./Comments.css";

const Comments = ({ dimensionLabel, dimensionValue, dimensionCode }) => {
  return (
    <div className="rectangle-parent">
      <div className="frame-child1" />
      <img className="ellipse-icon" alt="" src="/ellipse-14@2x.png" />
      <div className="jin">Jin</div>
      <div className="gamer">Gamer</div>
      <div className="vector-group">
        <img className="vector-icon6" alt="" src="/vector2.svg" />
        <img className="vector-icon6" alt="" src={dimensionLabel} />
        <img className="vector-icon6" alt="" src={dimensionValue} />
        <img className="vector-icon6" alt="" src="/vector5.svg" />
        <img className="vector-icon6" alt="" src={dimensionCode} />
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle-18.svg" />
      <div className="para">{"This is where you can find a dream home of your choice without stress. This is where you can find a dream home of your choice without stress. This is where you can find a dream home of your choice without stress."}</div>
    </div>
  );
};

export default Comments;
