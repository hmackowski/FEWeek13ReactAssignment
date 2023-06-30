// Importing the React library to use JSX and create a functional component
import React from "react";

// Defining a functional component named LoginFields
function LoginFields() { 

  // An array of objects representing form elements with their respective attributes
  let formElements = [
    // An object representing a username input field
    {inputType: "text", placeHolderText: "  Username", inputClass: "loginText", autoComplete: "username"},
    
    // An object representing a password input field
    {inputType: "password", placeHolderText: "  Password", inputClass: "loginText",autoComplete: "new-password" },
    
    // An object representing a login button
    {inputType: "button", valueText: "Login", inputClass: "loginSubmit"}
  ];

  // The component renders a div which contains form elements
  return (
    <div>
      {/* Iterating over the formElements array and returning an input for each object */}
      {formElements.map((formElement, index) => (
        // Wrapping each input in a div for styling and layout, assigning a unique key to each div using the map function's index parameter
        <div key={index}>
          {/* Input field attributes are set based on the properties of the current formElement object */}
          <input 
          className={formElement.inputClass} // CSS class for styling
          type={formElement.inputType} // The type of input field (text, password, button)
          placeholder={formElement.placeHolderText} // Placeholder text inside the input field
          autoComplete={formElement.autoComplete} // AutoComplete attribute for the input field
          
          // Display text for the button
          value={formElement.valueText}/> 
        </div>
      ))}
    </div>
  );
}

// Exporting the LoginFields component for use in other modules
export default LoginFields;
