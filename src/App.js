import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Profile from "./pages/Profile";
import { NavTemplates, NavBoards } from "./helpers/mockData";
import Logo from "./images/logo.png";
import Settings from "./images/settings.png";
import User from "./images/img.png";
import Footer from "./components/Footer";

function App() {
  // save in state
  const navClickHandler = (id) => {
    console.log("id", id);
  };
  return (
    <div className="App">
      <div className="left-bar">
        <div className="logo-wrapper">
          <img src={Logo} alt="Resumize me logo" />
        </div>
        <NavigationBar
          templates={NavTemplates}
          boards={NavBoards}
          navClickHandler={navClickHandler}
        />
        <div className="account">
          <div className="account-name">
            <img src={User} alt="user" />
            <p>Clara</p>
          </div>
          <img src={Settings} alt="settings" />
        </div>
      </div>
      <div className="view">
        <Profile />
        <Footer />
      </div>
    </div>
  );
}

export default App;
