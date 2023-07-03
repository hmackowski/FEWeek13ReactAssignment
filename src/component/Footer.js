// Importing the React library to create a functional component
import React from "react";

// Defining a functional component called Footer
function Footer() {
  // The component returns a footer element with a specific CSS class for styling
  return (
    <footer className="main-footer">
      <br />

      {/* An anchor tag that opens a new tab and directs the user to a GitHub profile when clicked */}
      <a target="_blank" href="https://github.com/hmackowski">
        {/* An image tag where the source is a local image that is required (imported) at runtime */}
        <img id="githubImage" src={require("../images/github.png")}></img>
      </a>
      {/* An anchor tag that opens a new tab and directs the user to a LinkedIn profile when clicked */}
      <a target="_blank" href="https://www.linkedin.com/in/hmackowski/">
        {/* An image tag where the source is a local image that is required (imported) at runtime */}
        <img id="linkedinImage" src={require("../images/linkedIn.png")}></img>
      </a>

      {/* A div with class 'row', containing a nested div with classes 'col' and 'text-center' */}
      <div className="row">
        <div className="col text-center">
          {/* Displaying a copyright message with the current year automatically updated */}
          &copy; {new Date().getFullYear()} Haskell Mackowski. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

// Exporting the Footer component for use in other modules
export default Footer;
