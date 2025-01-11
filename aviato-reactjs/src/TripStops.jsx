import { Button } from "@headlessui/react";
import TripStopItem from "./TripStopItem";
import { useState } from "react";
import "./TripStops.css";

function TripStops() {
  const [elements, setElements] = useState([
    { id: 1, type: "textbox" },
    { id: 2, type: "button" },
    { id: 3, type: "textbox" },
  ]);

  const [states, setStates] = useState([
    { country: "", city: "", activity: "" },
    { country: "", city: "", activity: "" },
  ]);

  const addElement = (index) => {
    const newTextbox = { id: Date.now(), type: "textbox" };
    const newButton = { id: Date.now() + 1, type: "button" };

    // Insert new elements at the correct position
    const updatedElements = [...elements];
    updatedElements.splice(index + 1, 0, newTextbox, newButton);
    setElements(updatedElements);
    const updatedStates = [...elements];
    updatedStates.splice(index + 1, 0, { country: "", city: "", activity: "" });
    setElements(updatedStates);
    console.log(states);
  };

  const removeElement = (index) => {
    // const updatedElements = elements.filter((element, i) => i !== index);
    setElements([...elements.slice(0, index), ...elements.slice(index + 2)]);
    setStates([...states.slice(0, index), ...states.slice(index + 1)]);
  };

  const submit = () => {};

  return (
    <>
      <div className="stopsContainer">
        {elements.map((element, index) => {
          if (element.type === "textbox") {
            return (
              <div className="stop">
                <TripStopItem
                  title={
                    index === 0
                      ? "Departure"
                      : index === elements.length - 1
                      ? "Destination"
                      : null
                  }
                  basic={index === 0}
                  key={element.id}
                  setState={(state) => {
                    const updatedStates = [...states];
                    updatedStates.splice(index + 1, 0, state);
                    setElements(updatedStates);
                    console.log(states);
                  }}
                />
                {index !== 0 && index !== elements.length - 1 ? (
                  <Button onClick={() => removeElement(index)}>x</Button>
                ) : null}
              </div>
            );
          } else if (element.type === "button") {
            return (
              <>
                <Button key={element.id} onClick={() => addElement(index)}>
                  Add stop
                </Button>
              </>
            );
          }
          return null;
        })}
      </div>
      <Button onClick={submit}>Submit</Button>
    </>
  );
}

export default TripStops;
