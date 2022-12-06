import affirm from "../../data/affirm";
import "./Affirm.scss";

const Affirm = () => {
  const affirmations = affirm.map((a) => {
    return (
      <div className="affirm-item">
        <img className="affirm-image" src={a.src} alt="affirmation" />
      </div>
    );
  });
  return <div className="affirm-container">{affirmations}</div>;
};

export default Affirm;
