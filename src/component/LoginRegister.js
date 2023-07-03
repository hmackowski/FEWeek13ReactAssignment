// Importing the React library to create a functional component
import React from "react";

// Defining a functional component named LoginRegister
function LoginRegister() {

  // The component returns a div that contains two anchor tags 
  return (
    // The div has a specific CSS class assigned for styling purposes
    <div className="forget-register-links">
      {/* The first anchor tag is for the "Forgot password?" link */}
      <a href="#">Forgot password?</a>

      {/* The second anchor tag is for the "Register" link */}
      <a href="#">Register</a>
    </div>
  );
}

// Exporting the LoginRegister component for use in other modules
export default LoginRegister;
