import "./Terms.scss";
import terms from "../../data/terms";

const Terms = () => {
  const termsConditions = terms.map((term, i) => {
    return (
      <div className="term" key={i}>
        <h1 className="term-title">{term.name}</h1>
        <p className="term-body">{term.content}</p>
      </div>
    );
  });
  return <div className="term-container">{termsConditions}</div>;
};
export default Terms;
