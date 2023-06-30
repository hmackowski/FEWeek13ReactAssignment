// Importing the React library to create a functional component
import React from "react";

// Importing components from the local files
import LoginFields from "./LoginFields";
import LoginRegister from "./LoginRegister";
import LoginHeader from "./LoginHeader";

// Defining a functional component called Login
function Login() { 

  // The component returns a div that acts as a container for the login page 
  return (
    <div className="login-container">
      {/* Including the LoginHeader component which might contain a title or some description */}
      <LoginHeader />
      
      {/* Including the LoginFields component which might contain input fields for the login form */}
      <LoginFields />

      <div className="forget-register">
        {/* Including the LoginRegister component which might contain links for password recovery and new registration */}
        <LoginRegister />
      </div>
    </div>
  );
}

// Exporting the Login component for use in other modules
export default Login;
