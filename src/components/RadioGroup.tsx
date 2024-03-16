import React, { useState } from "react";

const RadioGroup = () => {
  // The selected drink
  const [selectedDrink, setSelectedDrink] = useState<String>();

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };

  return (
    <div className="container">
      <h3>OPTIONS</h3>
      <fieldset className="flex flex-col gap-3 m-3">
        <p>
          <input
            type="radio"
            name="seat"
            value="100.000 VND"
            id="4seat"
            onChange={radioHandler}
          />
          <label htmlFor="coffee">4 Seat</label>
        </p>

        <p>
          <input
            type="radio"
            name="seat"
            value="180.000 VND"
            id="7seat"
            onChange={radioHandler}
          />
          <label htmlFor="tea">7 Seat</label>
        </p>

        <p>
          <input
            type="radio"
            name="seat"
            value="300.000 VND"
            id="16seat"
            onChange={radioHandler}
          />
          <label htmlFor="pumpkin">16 Seat</label>
        </p>
      </fieldset>

      {/* Display the selected drink */}
      {selectedDrink && <h2>{selectedDrink}</h2>}
    </div>
  );
};
export default RadioGroup;
