import Form from "../../Component/Form/Forn";
import "./CandleTool.scss";

const CandleTool = () => {
  const handleSubmit = async (candle) => {
    const result = await fetch("http://localhost:8080/candle", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candle),
    });
    if (result.ok) {
      alert("Added Candle");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleUpdateCandle = async (updatedCandle) => {
    const result = await fetch(
      `http://localhost:8080/candle/${updatedCandle.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCandle),
      }
    );
    if (result.ok) {
      alert("Candle updated");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteCandle = async (updatedCandle) => {
    const result = await fetch(
      `http://localhost:8080/candle/${updatedCandle.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.ok) {
      alert("Candle deleted");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    id: "",
    name: "",
    fragranceNotes: "",
    description: "",
    vessel: "",
  };

  return (
    <div className="form-Container">
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Candle"
      />
      <Form
        handleSubmit={handleUpdateCandle}
        defaultFormState={defaultFormState}
        formTitle="Update A New Candle"
      />
      <Form
        handleSubmit={handleDeleteCandle}
        defaultFormState={defaultFormState}
        formTitle="Delete A Candle"
      />
    </div>
  );
};

export default CandleTool;
