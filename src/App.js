import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"
import LoginPage from "./login";
import HomePage from "./home"

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const handleLogin = (username) => {
    setLoggedInUser(username)
  }
  return (
    <div>
      {loggedInUser ? (
        <HomePage/>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
