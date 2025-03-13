import React from "react"; // Import React
import { StrictMode } from "react"; // Import StrictMode
import { createRoot } from "react-dom/client"; // Import createRoot from ReactDOM
import App from "./App.jsx"; // Import the main App component
// import './styles/tailwind.css'; // Import Tailwind CSS for styling
import { GoogleOAuthProvider } from "@react-oauth/google";

// Create a root element to render the app into
const root = createRoot(document.getElementById("root"));

// Render the App component inside a strict mode
root.render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1058462362544-mttbri2hjho03rlerca399ldn25f9ies.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </StrictMode>
);
