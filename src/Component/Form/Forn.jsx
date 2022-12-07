import { useState } from "react";
import "./Form.scss";

const Form = ({ defaultFormState, handleSubmit, formTitle }) => {
  const [candle, setCandle] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(candle).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(candle);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <input
          className="form-container__input"
          type="text"
          placeholder="ID"
          value={candle.id}
          onInput={(event) => setCandle({ ...candle, id: event.target.value })}
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Name"
          value={candle.name}
          onInput={(event) =>
            setCandle({ ...candle, name: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Fragrance Notes"
          value={candle.fragranceNotes}
          onInput={(event) =>
            setCandle({ ...candle, fragranceNotes: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Description"
          value={candle.description}
          onInput={(event) =>
            setCandle({ ...candle, description: event.target.value })
          }
        />
        <input
          className="form-container__input"
          type="text"
          placeholder="Vessel"
          value={candle.vessel}
          onInput={(event) =>
            setCandle({ ...candle, vessel: event.target.value })
          }
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
