// Importing the SVG logo from the local files
import logo from "./logo.svg";

// Importing App.css for general styles across the app
import "./App.css";

// Importing the Login component from the components directory
import Login from "./component/Login";

// Importing the MainNav component from the components directory
import MainNav from "./component/MainNav";

// Importing the Footer component from the components directory
import Footer from "./component/Footer";

// Creating the App functional component
function App() {
  return (
    // React Fragments allow for returning multiple elements
    <>
      {/* Inserting the MainNav component at the top of the App */}
      <MainNav />
      
      <div className="App">
        {/* Creating a header for the App, and placing the Login component within it */}
        <header className="App-header">
          <Login />
        </header>
        
        {/* Placing the Footer component at the bottom of the App */}
        <Footer />
      </div>
    </>
  );
}

// Exporting the App component as the default export for this module
export default App;
